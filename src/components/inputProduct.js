import $ from '../util/domSelector.js';
import { HEADER } from '../constants/selector.js';
import productInput from '../templates/productInput.js';

export default class InputProduct {
  constructor() {
    this.render();
  }

  template() {
    return productInput();
  }

  render() {
    $(`#${HEADER.CONTENT_CONTAINER}`).innerHTML += this.template();
  }
}
