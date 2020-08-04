import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseAuthService } from '../firebase-auth.service';
import { Plugins } from '@capacitor/core';
import { DashboardService } from './dashboard.service';
import { LoadingController } from '@ionic/angular';

const { Storage } = Plugins;

export interface EVENTS {
  matchId: number,
  title: string,
  date: string,
  time: string,
  description: string,
  youtubeLink: string,
  roomId: string,
  roomPass: string,
  status: string,
  imgUrl: string,
  teamsCount: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  sliderUrls: string[] = [];

  events: EVENTS[];
  userHistory: any[];
  joinedEvents: number[] = [];
  slotNumbers: any = {};

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService, private loadingController: LoadingController, private service: DashboardService) {
      this.service.fetchSlideImages().subscribe(response => {
        this.sliderUrls = response;
      })
    }

  async methodInitializer() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    loading.present();

    this.service.fetchUserHistory().subscribe(userDetails => {
      loading.dismiss();
      if (userDetails.status == 200) {
        this.userHistory = userDetails.response;
        this.joinedEvents.length = 0;

        for (let historyEvent of this.userHistory) {
          // console.log(historyEvent);

          this.joinedEvents.push(historyEvent['MATCH_ID']);
          this.slotNumbers[historyEvent['MATCH_ID']] = historyEvent['SLOT_NO'];
        }

      }
    })

    loading.present();
    this.service.fetchListOfEvents().subscribe(events => {
      loading.dismiss();
      // console.log(events);
      if (events.status == 200) {
        this.events = events.response;
      }
    })
  }

  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['sign-in']);
    }, (error) => {
      console.log('signout error', error);
    });
  }

  getDetails(object: EVENTS, joined: boolean) {
    if (joined) { object['joined'] = joined; object['slotNo'] = this.slotNumbers[object.matchId]; }
    Storage.set({ key: 'match', value: JSON.stringify(object) }).then(response => {
      this.router.navigate(['match']);
    })
  }

  // Whenever view is entered hit the service
  ionViewDidEnter() {
    this.methodInitializer();
  }

}
