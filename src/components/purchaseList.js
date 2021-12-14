import $ from '../util/domSelector.js';
import { HEADER } from '../constants/selector.js';
import purchaseTable from '../templates/purchaseTable.js';

export default class PurchaseList {
  constructor(products) {
    this.products = products;
    this.render();
  }

  template() {
    return purchaseTable(this.products);
  }

  render() {
    $(`#${HEADER.CONTENT_CONTAINER}`).innerHTML += this.template();
  }
}
