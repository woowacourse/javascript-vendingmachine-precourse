import $ from '../util/domSelector.js';
import { HEADER } from '../constants/selector.js';
import coinInput from '../templates/coinInput.js';

export default class InputCoin {
  constructor(insertedCoin) {
    this.insertedCoin = insertedCoin;
    this.render();
  }

  template() {
    return coinInput(this.insertedCoin);
  }

  render() {
    $(`#${HEADER.CONTENT_CONTAINER}`).innerHTML += this.template();
  }
}
