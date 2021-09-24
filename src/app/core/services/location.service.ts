import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private httpClient: HttpClient) {}

  getLocation() {
    return this.httpClient.get('https://ipinfo.io?token=e6d305931ebd18').pipe(
      switchMap((result: any) => {
        const loc = result.loc.split(',');
        const coord = encodeURIComponent(`${loc[0]},${loc[1]}`);
        return this.httpClient.get(`https://api.opencagedata.com/geocode/v1/json?q=${coord}&key=44e89b3be2014041b47a76b9e1c7b869`);
      })
    );
  }
}
