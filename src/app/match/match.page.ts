import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { EVENTS, DashboardPage } from '../dashboard/dashboard.page';
import { AlertController, ToastController } from '@ionic/angular';
import { MatchService } from './match.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


const { Storage } = Plugins;

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  matchDetails: EVENTS = {
    matchId: 0,
    title: 'LOADING',
    date: 'LOADING',
    time: 'LOADING',
    description: 'LOADING',
    roomId: 'LOADING',
    roomPass: 'LOADING',
    imgUrl: 'LOADING',
    youtubeLink: 'NA',
    status: 'NOT STARTED',
    teamsCount: 0
  };
  teamDetails: any[] = [];
  userJoinedAlready: boolean;
  slotNo: number;
  youtubeUrl: SafeResourceUrl;

  constructor(private alertController: AlertController, private domSanitizer: DomSanitizer, private toastController: ToastController, private service: MatchService) { }

  ngOnInit() {
    Storage.get({ key: 'match' }).then(response => {
      let jsonResponse = JSON.parse(response.value);
      if (jsonResponse.hasOwnProperty('joined')) {
        if (jsonResponse.joined) {
          this.userJoinedAlready = true;
          this.slotNo = jsonResponse['slotNo'];
        }
      }

      this.matchDetails = jsonResponse;
      if(jsonResponse.youtubeLink != 'NA')
        this.youtubeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(jsonResponse.youtubeLink);

      // TODO: MAKE HTTP REQUEST AND FETCH LIST OF TEAM NAMES AND ITS SLOT NUMBERS
      this.service.fetchRivalsList(this.matchDetails.matchId).subscribe(response => {
        if (response.status == 200) {
          this.teamDetails = response.response.length > 0 ? response.response.sort((a,b) => a.slotNo - b.slotNo) : [];
        }
      })
      // this.teamDetails = [{slotNo: 1, teamName: 'Hyderabad Lions'}, {slotNo: 2, teamName: 'Chennai Kings'}];

    })
  }

  async fetchDetailsAndJoin() {
    const alert = await this.alertController.create({
      cssClass: 'custom-class',
      header: 'Fill Below Details to Join the Match!!',
      inputs: [
        {
          name: 'teamName',
          type: 'text',
          placeholder: 'Enter Team Name'
        }, {
          name: 'Player1',
          type: 'text',
          placeholder: 'Enter Player 1 Name'
        }, {
          name: 'Player2',
          type: 'text',
          placeholder: 'Enter Player 2 Name'
        }, {
          name: 'Player3',
          type: 'text',
          placeholder: 'Enter Player 3 Name'
        }, {
          name: 'Player4',
          type: 'text',
          placeholder: 'Enter Player 4 Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: async (data) => {
            // console.log('Confirm Ok! ', data);
            if (data.teamName == '' || data.Player1 == '' || data.Player2 == '' ||
              data.Player3 == '' || data.Player4 == '') {
              const toast = await this.toastController.create({
                message: 'Kindly Enter Team Name and all Player Details.',
                duration: 2000
              });
              toast.present();
            } else {
              // Todo: Call HTTP Request to handle insert
              data['matchId'] = this.matchDetails.matchId;
              this.service.joinEvent(data).subscribe(async response => {
                if (response.status == 200) {
                  const toast = await this.toastController.create({
                    message: 'Your entry has been accepted! Your Slot Number - ' + response.slotNo,
                    duration: 4000
                  });
                  toast.present();
                  this.userJoinedAlready = true;
                  this.slotNo = response.slotNo;
                }
              })
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
