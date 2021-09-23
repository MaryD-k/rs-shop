import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appProductAvailability]',
})
export class ProductAvailabilityDirective implements OnInit {
  @Input() amount: number;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    let goodsColor: string;

    if (this.amount >= 20) {
      goodsColor = 'green';
    } else if (this.amount > 5 && this.amount <= 19) {
      goodsColor = '#ffd700';
    } else {
      goodsColor = 'red';
    }

    this.el.nativeElement.style.color = goodsColor;
    this.el.nativeElement.style.fill = goodsColor;
  }
}
