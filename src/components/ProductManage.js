import Component from '../core/Component.js';
import Product from '../models/Product.js';

import { removeTags } from '../utils/element-tools.js';
import { checkProductVaild } from '../models/UserInputCheck.js';
import { errorAlert } from '../utils/error-alert.js';

import ProductList from './product/ProductList.js';
import ProductInputForm from './product/ProductInputForm.js';

import { $productState } from './StateList.js';

export default class ProductManage extends Component {
  htmlTemplate() {
    return `
    <section class="component" data-component="product-input-form"></section>
    <section class="component" data-component="product-list"></section>
    `;
  }

  mounted() {
    this.addMount('product-input-form', ProductInputForm, {
      addProduct: this.addProduct,
    });

    this.addMount('product-list', ProductList, {
      state: $productState,
    });
  }

  addProduct(inputName, inputPrice, inputQuantity) {
    const product = {
      name: removeTags(inputName),
      price: Number(inputPrice),
      quantity: Number(inputQuantity),
    };

    const resultCode = checkProductVaild(product);
    if (errorAlert(resultCode) === true) return false;

    $productState.value = new Product($productState.value).add(product).result;
    return true;
  }
}
