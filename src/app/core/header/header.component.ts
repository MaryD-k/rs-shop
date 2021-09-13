import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  isPopUpOpen: boolean;

  isComunDropDownOpen: boolean;

  isCatalogOpen: boolean;

  ngOnInit(): void {
    this.isPopUpOpen = false;
    this.isComunDropDownOpen = false;
  }

  openLocationPopUp() {
    this.isPopUpOpen = true;
  }

  closePopUp() {
    this.isPopUpOpen = false;
  }

  toggleComunicationDropDwon() {
    if(!this.isComunDropDownOpen) {
      this.isComunDropDownOpen = true;
    } else {
      this.isComunDropDownOpen = false;
    }
  }

  toogleCatalog(state: boolean) {
    this.isCatalogOpen = state;
  }
}
