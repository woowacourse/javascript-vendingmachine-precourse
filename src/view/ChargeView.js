import { COIN_LIST } from '../utils/constant.js';
import { $ } from '../utils/DOM.js';
import { CHARGE_SECTION_TEMPLATE } from '../utils/template.js';

export class ChargeView {
  constructor() {
    this.$productChargeSection = $('#product-charge-section');
    this.$chargeInput;
    this.$chargeButton;
    this.$machineChargeAmount;
    this.$coin500Quantity;
    this.$coin100Quantity;
    this.$coin50Quantity;
    this.$coin10Quantity;
    this.addElements();
  }

  setOnChargeSubmit(fn) {
    this.$chargeButton.addEventListener('click', (e) => {
      e.preventDefault();
      const chargeMoney = Number(this.$chargeInput.value);
      fn(chargeMoney);
    });
  }

  showChargeAmount(machineChargeAmount) {
    this.$machineChargeAmount.innerText = machineChargeAmount;
  }

  showMachineCoins(machineCoins) {
    const $coinArray = [
      this.$coin500Quantity,
      this.$coin100Quantity,
      this.$coin50Quantity,
      this.$coin10Quantity,
    ];

    $coinArray.map(($coin, index) => ($coin.innerText = machineCoins[COIN_LIST[index]] + '개'));
  }

  addElements() {
    this.$productChargeSection.innerHTML = CHARGE_SECTION_TEMPLATE;
    this.$chargeInput = $('#vending-machine-charge-input');
    this.$chargeButton = $('#vending-machine-charge-button');
    this.$machineChargeAmount = $('#vending-machine-charge-amount');
    this.$coin500Quantity = $('#vending-machine-coin-500-quantity');
    this.$coin100Quantity = $('#vending-machine-coin-100-quantity');
    this.$coin50Quantity = $('#vending-machine-coin-50-quantity');
    this.$coin10Quantity = $('#vending-machine-coin-10-quantity');
  }
}
