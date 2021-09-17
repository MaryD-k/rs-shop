import { Pipe, PipeTransform } from '@angular/core';
import { Sorting } from 'src/app/models/goods-sorting.model';
import { Product } from 'src/app/models/product.model';
import { SORT_TYPE } from './constants/sorting-type.constants';

@Pipe({
  name: 'sortGoods',
})
export class SortPipe implements PipeTransform {

  transform(value: Product[], sortType?: Sorting) {
    let sortedValue: Product[] = [...value];

    if (sortType?.sortType === SORT_TYPE.popularity) {
      sortedValue = [...value].sort((a, b) => b.rating - a.rating);
    }
    if (sortType?.sortType === SORT_TYPE.price) {
      sortedValue = [...value].sort((a, b) => b.price - a.price);
    }

    return sortType?.isReverse ? sortedValue.reverse() : sortedValue;
  }
}