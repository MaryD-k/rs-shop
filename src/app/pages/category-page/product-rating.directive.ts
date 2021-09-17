import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[productRating]',
})
export class ProductRatingDirective implements OnInit {
  
  @Input() rating: number;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.width = `${this.rating * 20}%`;
  }
}
