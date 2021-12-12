import { $productState } from './StateList.js';
import { handleAddProduct } from '../controller/VendingMachine.js';

import Component from '../core/Component.js';
import ProductList from './product/ProductList.js';
import ProductInputForm from './product/ProductInputForm.js';

export default class ProductManage extends Component {
  htmlTemplate() {
    return `
    <section class="component" data-component="product-input-form"></section>
    <section class="component" data-component="product-list"></section>
    `;
  }

  mounted() {
    this.addMount('product-input-form', ProductInputForm, {
      handleAddProduct,
    });

    this.addMount('product-list', ProductList, {
      state: $productState,
    });
  }
}
