import { ID } from '../constants/selectors.js';

export default class TabView {
  constructor() {
    this.contentContainer = document.getElementById(ID.CONTENT.CONTAINER);
  }

  initElements() {
    this.inputs = document.querySelectorAll('input');
  }

  clearAllInput() {
    this.inputs.forEach((input) => {
      input.value = '';
    });
  }
}
