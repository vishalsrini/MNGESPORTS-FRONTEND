import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@capacitor/core';
import { FirebaseAuthService } from '../firebase-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private idToken: string;

  constructor(private http: HttpClient, private firebaseAuthService: FirebaseAuthService) {
    this.firebaseAuthService.getLoggedInUser().getIdToken().then(token => {
      this.idToken = token;
    });
  }

  // Fetch list of events happening in MNG ESPORTS
  fetchListOfEvents(): any {
    return this.http.get(environment.serverUrl + "/matches?userId=" + this.firebaseAuthService.getLoggedInUser().email + "&idToken=" + this.idToken);
  }

  // Fetch history of current user
  fetchUserHistory(): Observable<any> {
      return this.http.get(environment.serverUrl + "/user?userId=" + this.firebaseAuthService.getLoggedInUser().email + "&idToken=" + this.idToken);
  }

  // Fetch Images for each slide
  fetchSlideImages(): Observable<any> {
    return this.http.get('https://mngesports.vishalsrini.com/static/resource.json');
  }
}
