import {
  VALIDATION_MESSAGES,
  PRODUCT_PRICE_UNIT,
  ELEMENT_CLASSES,
  ELEMENT_DATA_ATTRIBUTES,
  PURCHASE_MESSAGE
} from '../constants.js';
import { isEmptyString, isNaturalNum } from '../utils.js';
import VendingMachineSharedModel from '../models/vending-machine-shared-model.js';
import ProductPurchaseView from '../views/product-purchase/index.js';
import Observer from '../abstracts/observer.js';

class ProductPurchaseController extends Observer {
  constructor() {
    super('ProductPurchaseController');
    this.model = new VendingMachineSharedModel();
  }

  mountView() {
    const $tabContent = document.querySelector(`.${ELEMENT_CLASSES.TAB_CONTENT}`);
    this.$view = new ProductPurchaseView($tabContent).mount();
    this.registerEventListener();
    this.registerObserver();
  }

  unmountView() {
    this.$view.unmount();
  }

  registerEventListener() {
    const { $chargeButton } = this.$view.$form;
    $chargeButton.addEventListener('click', () => this.handleSubmitMoney());
  }

  registerPurchaseButtonClickEventListener() {
    const $buttons = document.querySelectorAll(`.${ELEMENT_CLASSES.PRODUCT_PURCHASE.PURCHASE_BUTTON}`);
    $buttons.forEach(($button) => {
      $button.addEventListener('click', (e) => this.handleClickPurchaseBtn(e));
    });
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

  handleClickPurchaseBtn(e) {
    const $button = e.target || e.currentTarget;
    const parent = $button.closest('tr');
    const { ITEM_NAME, ITEM_PRICE, ITEM_QUANTITY } = ELEMENT_DATA_ATTRIBUTES.PRODUCT_PURCHASE;
    const [nameNode, priceNode, quantityNode] = parent.children;
    const item = {
      name: nameNode.getAttribute(`${ITEM_NAME}`),
      price: parseInt(priceNode.getAttribute(`${ITEM_PRICE}`), 10),
      quantity: parseInt(quantityNode.getAttribute(`${ITEM_QUANTITY}`), 10),
    };
    this.purchaseProduct(item);
  }

  purchaseProduct({ name, price, quantity }) {
    if (quantity === 0) {
      alert(PURCHASE_MESSAGE.NO_STOCK);
      return;
    }
    if (this.model.chargeMoney < price) {
      alert(PURCHASE_MESSAGE.NEED_MORE_MONEY);
      return;
    }
    this.model.purchaseProduct(name, price);
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

  notify() {
    // event listener가 등록되고 나서 purchase button이 생성되기 때문에
    // 값이 변할때 event listener를 재등록 합니다
    const { productItems } = this.model;
    if (productItems.length > 0) {
      this.registerPurchaseButtonClickEventListener();
    }
  }
}

export default ProductPurchaseController;
