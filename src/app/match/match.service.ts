import { Injectable } from '@angular/core';
import { FirebaseAuthService } from '../firebase-auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  idToken: string;

  constructor(private http: HttpClient, private firebaseAuthService: FirebaseAuthService) {
    this.firebaseAuthService.getLoggedInUser().getIdToken().then(token => {
      this.idToken = token;
    });
  }

  // Fetch list of rivals and their slot numbers
  fetchRivalsList(matchId: number): Observable<any> {
    return this.http.get(environment.serverUrl + '/match-rivals?matchId='+matchId+'&userId='+ this.firebaseAuthService.getLoggedInUser().email + "&idToken=" + this.idToken);
  }

  // Insert for join event
  joinEvent(teamDetails: any): Observable<any> {
    teamDetails['userId'] = this.firebaseAuthService.getLoggedInUser().email;
    return this.http.post(environment.serverUrl + "/event/join" + "?idToken=" + this.idToken, teamDetails);
  }
}
