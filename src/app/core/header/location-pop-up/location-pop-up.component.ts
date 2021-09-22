import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeLocation } from 'src/app/redux/location/location.actions';
import { CITIES } from './location.constants';

@Component({
  selector: 'app-location-pop-up',
  templateUrl: './location-pop-up.component.html',
  styleUrls: ['./location-pop-up.component.scss'],
})
export class LocationPopUpComponent implements OnInit {

  cities = CITIES;

  selectedCity: string;

  @Input() isPopUpOpen: boolean;

  @Output() isPopUpClose = new EventEmitter<boolean>(false);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.selectedCity = this.cities[0];
  }

  closePopUp() {
    this.isPopUpOpen = false;
    this.isPopUpClose.emit(false);
  }

  selectCity() {
    this.store.dispatch(changeLocation({location: this.selectedCity}));
    this.closePopUp();
  }
}
