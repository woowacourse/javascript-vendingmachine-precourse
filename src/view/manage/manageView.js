import NUMBER from '../../constants/number.js';
import { $ } from '../../utils/DOMhelper.js';
import { manageTabTemplate } from '../../utils/template.js';

export default class ManageView {
  init() {
    this.$main = $('main');
  }

  renderManageTab(chargeAmount, coinsAmountArray, chargeInput) {
    this.$main.innerHTML = manageTabTemplate(chargeAmount, coinsAmountArray, chargeInput);
  }

  selectManageTabDOM() {
    this.$manageForm = $('#vending-machine-manage-form');
    this.$chargeInput = $('#vending-machine-charge-input');
    this.$chargeButton = $('#vending-machine-charge-button');
    this.$chargeAmount = $('#vending-machine-charge-amount');
    this.$coin500Quantity = $('#vending-machine-coin-500-quantity');
    this.$coin100Quantity = $('#vending-machine-coin-100-quantity');
    this.$coin50Quantity = $('#vending-machine-coin-50-quantity');
    this.$coin10Quantity = $('#vending-machine-coin-10-quantity');
  }

  renderChargeAmount(chargeAmount) {
    this.$chargeAmount.innerText = `${chargeAmount}`;
  }

  renderCoins(coins) {
    return coins.forEach(({ unit, amount }) => {
      const targetDOM = this.getCoinDOM(unit);

      targetDOM.innerHTML = `${amount}개`;
    });
  }

  getCoinDOM(unit) {
    if (unit === NUMBER.FIVE_HUNDRED) return this.$coin500Quantity;
    if (unit === NUMBER.HUNDRED) return this.$coin100Quantity;
    if (unit === NUMBER.FIFTY) return this.$coin50Quantity;
    if (unit === NUMBER.TEN) return this.$coin10Quantity;
  }
}
