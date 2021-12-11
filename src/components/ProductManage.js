import Component from '../core/Component.js';
import Product from '../models/Product.js';

import { removeTags } from '../utils/element-utils.js';
import { checkProductVaild } from '../models/UserInputCheck.js';
import { errorAlert } from '../utils/error-alert.js';

import ProductList from './product/ProductState.js';
import ProductInputForm from './product/ProductInputForm.js';

import { ProductState } from '../core/Store.js';

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
      state: ProductState,
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

    ProductState.value = new Product(ProductState.value).add(product).result;
    return true;
  }
}
