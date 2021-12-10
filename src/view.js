/* eslint-disable class-methods-use-this */
export default class VendingView {
  constructor() {
    this.$app = document.getElementById('app');
    this.$tab = document.getElementById('tab');
  }

  renderInApp(position, text) {
    this.$app.insertAdjacentHTML(position, text);
  }

  hideTab() {
    document.querySelector('.tab1').classList.remove('show');
    document.querySelector('.tab2').classList.remove('show');
    document.querySelector('.tab3').classList.remove('show');
  }

  showTab(tab) {
    document.querySelector(tab).classList.add('show');
  }

  addTableRow(table, data) {
    table.insertAdjacentHTML('beforeend', data);
  }

  alertMessage(message) {
    alert(message);
  }

  renderValueInSpot(spot, value) {
    spot.innerHTML = value;
  }

  clearTable(table) {
    table.innerHTML = '';
  }
}
