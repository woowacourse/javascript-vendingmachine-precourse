export default class VendingView {
  constructor(model) {
    this.model = model;
    this.$app = document.getElementById('app');
    this.$tab = document.getElementById('tab');
  }

  renderInApp(position, text) {
    this.$app.insertAdjacentHTML(position, text);
  }

  switchTab(tab) {
    document.querySelector('.tab1').classList.remove('show');
    document.querySelector('.tab2').classList.remove('show');
    document.querySelector('.tab3').classList.remove('show');
    document.querySelector(tab).classList.add('show');
  }
}
