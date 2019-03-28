import { Product } from './product';

export class Category {

  public products: Array<Product>;

  constructor(public name: String, public order: Number) {
    this.products = new Array();
  }


}
