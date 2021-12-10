import { $ } from '../../utils/selector.js';
import { ID, LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage.js';
import { isValidChargeInput } from '../../utils/valid.js';
import {
  purchaseInputTemplate,
  totalPurchaseTemplate,
} from '../../utils/template/purchaseTemplate.js';

class PurchaseInput {
  constructor($inputContainer, $totalContainer, state) {
    this.$inputContainer = $inputContainer;
    this.$totalContainer = $totalContainer;
    this.state = state;
    this.state.event.subscribe(this.showTotalCharge.bind(this));

    this.render();
  }

  render() {
    this.addTemplate();
    this.showTotalCharge();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$inputContainer.innerHTML = purchaseInputTemplate();
  }

  showTotalCharge() {
    this.$totalContainer.innerHTML = totalPurchaseTemplate();
  }

  selectDom() {
    this.$chargeInput = $(`#${ID.CHARGE_INPUT}`);
    this.$chargeButton = $(`#${ID.CHARGE_BUTTON}`);
  }

  addEvent() {
    this.$chargeButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    const amount = Number(this.$chargeInput.value);
    if (!isValidChargeInput(amount)) {
      return;
    }

    this.updateLocalStorage(amount);
    this.showTotalCharge();
  }

  updateLocalStorage(amount) {
    const purchase = getLocalStorage(LOCAL_DB.PURCHASE);
    saveLocalStorage(LOCAL_DB.PURCHASE, Number(purchase + amount));
  }
}

export default PurchaseInput;
