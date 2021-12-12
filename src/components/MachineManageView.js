import { CHANGE, FIFTY, FIVE_HUNDRED, ONE_HUNDRED, TEN, VALUES, COINS } from '../utils/constants.js';
import { HTML_OF_MACHINE_MANAGE_PART, HTML_OF_MACHINE_MANAGE_TABLE } from '../utils/html.js';

export default class MachineManageView {
  static render() {
    this.showPage();
    if(localStorage.getItem(CHANGE) !== null && localStorage.getItem(COINS)) {
        this.showChange();
        this.showTable();
    }
  }

  static showPage() {
    document.getElementById('bottom-container').innerHTML =
    HTML_OF_MACHINE_MANAGE_PART + HTML_OF_MACHINE_MANAGE_TABLE;
  }

  static showChange() {
    const change = JSON.parse(localStorage.getItem(CHANGE));

    document.getElementById('vending-machine-charge-amount').innerHTML = `${change[VALUES]}`;
  }

  static showTable() {
    const coins = JSON.parse(localStorage.getItem(COINS));

    document.getElementById('vending-machine-coin-500-quantity').innerHTML = `${coins[FIVE_HUNDRED]}개`;
    document.getElementById('vending-machine-coin-100-quantity').innerHTML = `${coins[ONE_HUNDRED]}개`;
    document.getElementById('vending-machine-coin-50-quantity').innerHTML = `${coins[FIFTY]}개`;
    document.getElementById('vending-machine-coin-10-quantity').innerHTML = `${coins[TEN]}개`;
  }
}
