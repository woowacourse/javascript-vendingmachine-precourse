import $ from '../util/domSelector.js';
import { HEADER } from '../constants/selector.js';
import changeInput from '../templates/changeInput.js';

export default class InputChange {
  constructor() {
    this.render();
  }

  template() {
    return changeInput();
  }

  render() {
    $(`#${HEADER.CONTENT_CONTAINER}`).innerHTML += this.template();
  }
}
