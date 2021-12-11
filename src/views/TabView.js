export default class TabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
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
