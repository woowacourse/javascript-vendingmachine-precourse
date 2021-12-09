export default class VendingView {
  constructor(model) {
    this.model = model;
    this.app = document.getElementById('app');
  }

  renderInApp(insertPosition, text) {
    this.app.insertAdjacentHTML(insertPosition, text);
  }
}
