import { Component, OnInit } from '@angular/core';
import { GoodsSettingsService } from 'src/app/services/goods-sorting.service';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss'],
})
export class SortingBlockComponent implements OnInit {
  sortType: string;

  isReverseSort: boolean;

  constructor(private goodsSettingsService: GoodsSettingsService) {}

  ngOnInit(): void {
    this.isReverseSort = false;
  }

  toogleSort(sortType: string) {
    if (this.sortType === sortType) {
      this.isReverseSort = !this.isReverseSort;
    }
    this.sortType = sortType;
    this.goodsSettingsService.setSort({ sortType: this.sortType, isReverse: this.isReverseSort });
  }
}
