import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/state.model';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {

  goodsToBuy = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.subscribe((request: any) => {
      this.goodsToBuy = request.userState.user?.cart
      console.log(this.goodsToBuy)
    })
      
  }

}
