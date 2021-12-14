import { VALIDATION_MESSAGES, PRODUCT_PRICE_UNIT, ELEMENT_CLASSES } from '../constants.js';
import { isEmptyString, isNaturalNum } from '../utils.js';
import VendingMachineSharedModel from '../models/vending-machine-shared-model.js';
import ProductPurchaseView from '../views/product-purchase/index.js';

class ProductPurchaseController {
  constructor() {
    this.model = new VendingMachineSharedModel();
  }

  mountView() {
    const $tabContent = document.querySelector(`.${ELEMENT_CLASSES.TAB_CONTENT}`);
    this.$view = new ProductPurchaseView($tabContent).mount();
    this.registerEventListener();
  }

  unmountView() {
    this.$view.unmount();
  }

  registerEventListener() {
    const { $chargeButton } = this.$view.$form;
    $chargeButton.addEventListener('click', () => this.handleSubmitMoney());
  }

  handleSubmitMoney() {
    const { $chargeInput } = this.$view.$form;
    const moneyString = $chargeInput.value.trim();
    const { isValid, message } = this.isValidMoney(moneyString);
    if (isValid) {
      const money = parseInt(moneyString, 10);
      this.model.addChargeMoney(money);
      return;
    }
    alert(message);
  }

  isValidMoney(moneyString) {
    const { MONEY } = VALIDATION_MESSAGES.PURCHASE_PRODUCT;
    let [isValid, message] = [true, null];
    if (!isEmptyString(moneyString) && isNaturalNum(moneyString)) {
      const money = parseInt(moneyString, 10);
      if (money % PRODUCT_PRICE_UNIT !== 0) {
        isValid = false;
        message = MONEY;
      }
    } else {
      isValid = false;
      message = MONEY;
    }
    return { isValid, message };
  }
}

export default ProductPurchaseController;
