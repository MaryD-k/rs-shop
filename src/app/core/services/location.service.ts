import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // user$: Observable<AuthUser | null>;

  // private userSubject = new BehaviorSubject<AuthUser | null>(null);

  // isLogIn$: Observable<boolean>;

  // private isLogInSubject = new BehaviorSubject<boolean>(false);

  // constructor() {
  //   this.isLogIn$ = this.isLogInSubject.asObservable();
  //   this.user$ = this.userSubject.asObservable();
  // }

  geoFindMe() {

    // const status = document.querySelector('#status');
  
    // function success(position: any) {
    //   const latitude  = position.coords.latitude;
    //   const longitude = position.coords.longitude;
  
    //   status.textContent = '';
    //   mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    //   mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    // }
  
    // function error() {
    //   console.log('Unable to retrieve your location');
    // }
  
    // if(!navigator.geolocation) {
    //   console.log('error')
    // } else {
    //   navigator.geolocation.getCurrentPosition(success, error);
    // }

    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log(position)
      },
      function(error) {
        console.log('error')
      }
    )
  
  }
}
