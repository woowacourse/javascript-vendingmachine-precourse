import $ from '../util/domSelector.js';
import { HEADER } from '../constants/selector.js';
import vendingmachineCoin from '../templates/vendingmachineCoin.js';

export default class VendingmachineCoin {
  constructor() {
    this.render();
  }

  template() {
    return vendingmachineCoin();
  }

  render() {
    $(`#${HEADER.CONTENT_CONTAINER}`).innerHTML += this.template();
  }
}
