import { Component } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { OPTIONS_DEFAULT, PromoCarouselOptions } from './promo-carousel.model';

@Component({
  selector: 'app-promo-carousel',
  templateUrl: './promo-carousel.component.html',
  styleUrls: ['./promo-carousel.component.scss'],
  providers: [],
})
export class PromoCarouselComponent {
  options: PromoCarouselOptions;

  watch$!: Observable<number>;

  changeSlide$ = new Subject<number>();

  constructor() {
    this.startconfig();
  }

  startconfig() {
    this.options = { ...OPTIONS_DEFAULT };
    this.watch$ = this.changeSlide$.pipe(
      startWith(0),
      switchMap((index) => {
        if (index >= 0) {
          this.options!.hide = this.options!.active;
          this.options!.active = index;
        }
        return interval(this.options!.interval).pipe(
          tap(() => {
            if (!window.document.hidden) {
              if (this.options!.active + 1 === this.options!.slides.length) {
                this.options!.hide = this.options!.slides.length - 1;
                this.options!.active = 0;
              } else {
                this.options!.hide = this.options!.active;
                this.options!.active += 1;
              }
            }
          })
        );
      })
    );
  }
}
