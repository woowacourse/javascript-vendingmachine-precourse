import Validation from '../utils/validation.js';
import { ERROR } from '../utils/constant.js';

export class Inventory {
  constructor(productList) {
    this.valid = new Validation();
    this.productList = productList;
  }

  addProduct(product) {
    const isValid = this.valid.checkManageInput(product);
    if (isValid) {
      this.productList.addProduct(product);
    } else {
      alert(ERROR.MANAGEINPUT);
    }
  }

  showProductList(view) {
    view.cleantable();
    view.showProductListAll(this.productList.products);
  }
}