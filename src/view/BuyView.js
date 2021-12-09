import { $ } from '../utils/DOM.js';
import { BUY_SECTION_TEMPLATE } from '../utils/template.js';

export class BuyView {
  constructor() {
    this.$productBuySection = $('#product-buy-section');
    this.$chargeInput;
    this.$chargeButton;
    this.$chargeAmount;
    this.addElements();
  }

  setOnMoneySubmit(fn) {
    this.$chargeButton.addEventListener('click', (e) => {
      e.preventDefault();
      const insertedMoney = Number(this.$chargeInput.value);
      fn(insertedMoney);
    });
  }

  showTotalInsertedMoney(totalInsertedMoney) {
    this.$chargeAmount.innerText = totalInsertedMoney;
  }

  addElements() {
    this.$productBuySection.innerHTML = BUY_SECTION_TEMPLATE;
    this.$chargeInput = $('#charge-input');
    this.$chargeButton = $('#charge-button');
    this.$chargeAmount = $('#charge-amount');
  }
}
