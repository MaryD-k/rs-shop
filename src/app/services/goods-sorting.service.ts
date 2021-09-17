import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sorting } from '../models/goods-sorting.model';

@Injectable({
  providedIn: 'root',
})
export class GoodsSettingsService {

  currentSort$: Observable<Sorting>;

  private currentSortSubject = new BehaviorSubject<Sorting>({ sortType: '', isReverse: false });

  constructor() {
    this.currentSort$ = this.currentSortSubject.asObservable();
  }

  setSort(sort: Sorting): void {
    this.currentSortSubject.next(sort);
  }
}
