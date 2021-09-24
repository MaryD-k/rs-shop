import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLocation } from 'src/app/redux/location/location.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  location: string;

  isPopUpOpen: boolean;

  isComunDropDownOpen: boolean;

  isCatalogOpen: boolean;

  constructor(private store: Store) {
    this.store.subscribe((result: any) => {
      this.location = result.locationState.location;
    });
  }

  ngOnInit(): void {
    this.isPopUpOpen = false;
    this.isComunDropDownOpen = false;
    this.store.dispatch(getLocation());
  }

  openLocationPopUp() {
    this.isPopUpOpen = true;
  }

  closePopUp() {
    this.isPopUpOpen = false;
  }

  toggleComunicationDropDwon() {
    if (!this.isComunDropDownOpen) {
      this.isComunDropDownOpen = true;
    } else {
      this.isComunDropDownOpen = false;
    }
  }

  toogleCatalog(state: boolean) {
    this.isCatalogOpen = state;
  }
}
