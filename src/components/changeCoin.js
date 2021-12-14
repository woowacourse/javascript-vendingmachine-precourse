import $ from '../util/domSelector.js';
import { HEADER } from '../constants/selector.js';
import coinChange from '../templates/coinChange.js';

export default class ChangeCoin {
  constructor() {
    this.render();
  }

  template() {
    return coinChange();
  }

  render() {
    $(`#${HEADER.CONTENT_CONTAINER}`).innerHTML += this.template();
  }
}
