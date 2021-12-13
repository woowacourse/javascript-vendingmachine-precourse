import Component from '../../core/Component.js';
import { newElement } from '../../utils/dom.js';
import Form from './Form.js';
import ProductList from './ProductList.js';

export default class ProductManagementTab extends Component {
  initChildren() {
    this.children = [
      new Form(newElement('<form id="prodcut-add-form"/>')),
      new ProductList(newElement('<div id="product-list"/>')),
    ];
  }
}
