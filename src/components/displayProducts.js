import $ from '../util/domSelector.js';
import { HEADER } from '../constants/selector.js';
import displayProducts from '../templates/productsTable.js';

export default class DisplayProducts {
  constructor(products) {
    this.products = products;
    this.render();
  }

  template() {
    return displayProducts(this.products);
  }

  render() {
    $(`#${HEADER.CONTENT_CONTAINER}`).innerHTML += this.template();
  }
}
