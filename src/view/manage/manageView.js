import { $ } from '../../utils/DOMhelper.js';
import { manageTabTemplate } from '../template.js';

export default class ManageView {
  init() {
    this.$main = $('main');
  }

  renderManageTab(chargeAmount) {
    this.$main.innerHTML = manageTabTemplate(chargeAmount);
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
    this.$chargeAmount.innerText = `${chargeAmount}원`;
  }
}
