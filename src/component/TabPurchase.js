import Navigator from '../store/Navigator.js';
import VendingMachine from '../store/VendingMachine.js';
import Title from '../core/Title.js';
import Input from '../core/Input.js';
import Button from '../core/Button.js';
import ProductPurchaseTable from '../core/ProductPurchaseTable.js';
import CoinTable from '../core/CoinTable.js';
import AmountView from '../core/AmountView.js';
import { isValidRecharge, canBePurchase, canBeReturn } from '../utils/validation.js';
import { TAB_ID } from '../constant/dataset.js';
import { TAG, DOM_ATTRIBUTE, SELECTOR, EVENT } from '../constant/dom.js';
import { COIN } from '../constant/coin.js';

const COIN_TABLE_IDS = {
  [COIN.COIN_500]: SELECTOR.ID_COIN_500_QUANTITY,
  [COIN.COIN_100]: SELECTOR.ID_COIN_100_QUANTITY,
  [COIN.COIN_50]: SELECTOR.ID_COIN_50_QUANTITY,
  [COIN.COIN_10]: SELECTOR.ID_COIN_10_QUANTITY,
};

export default class TabPurchase {
  constructor($parent, props) {
    this.$parent = $parent;
    this.props = props;
    this.$root = null;
    this.navigator = new Navigator();
    this.vendingMachine = new VendingMachine();

    this.createRootElement();
    this.determineDisplaying();
    this.render();
    this.setEvent();
  }

  createRootElement() {
    const $div = document.createElement(TAG.TAG_DIV);
    $div.setAttribute(DOM_ATTRIBUTE.ID, SELECTOR.ID_PURCHASE_TAB);
    $div.setAttribute(DOM_ATTRIBUTE.DATA_TAB_ID, TAB_ID.TAB_PURCHASE);

    this.$parent.appendChild($div);
    this.$root = $div;
  }

  determineDisplaying() {
    if (this.navigator.getFocusedTab() === TAB_ID.TAB_PURCHASE) {
      this.show();
    } else {
      this.hide();
    }
  }

  render() {
    this.renderInput();
    this.renderProductTable();
    this.renderCoinTable();
  }

  renderInput() {
    this.chargingTitle = new Title('금액 투입');
    this.chargingInput = new Input(SELECTOR.ID_CHARGE_INPUT, '투입할 금액', 'number');
    this.chargingSubmit = new Button(SELECTOR.ID_CHARGE_BUTTON, '투입하기');
    this.chargingAmount = new AmountView(SELECTOR.ID_CHARGE_AMOUNT, '투입한 금액', 0);

    this.$root.appendChild(this.chargingTitle.getTarget());
    this.$root.appendChild(this.chargingInput.getTarget());
    this.$root.appendChild(this.chargingSubmit.getTarget());
    this.$root.appendChild(this.chargingAmount.getTarget());
  }

  renderProductTable() {
    this.productListTitle = new Title('구매할 수 있는 상품 현황');
    this.productListTable = new ProductPurchaseTable({
      columns: ['상품명', '가격', '수량', '구매하기'],
      classes: [
        SELECTOR.CLASS_PRODUCT_PURCHASE_NAME,
        SELECTOR.CLASS_PRODUCT_PURCHASE_PRICE,
        SELECTOR.CLASS_PRODUCT_PURCHASE_QUANTITY,
        SELECTOR.CLASS_PRODUCT_PURCHASE_BUTTON,
      ],
      initialData: [],
    });
    this.$root.appendChild(this.productListTitle.getTarget());
    this.$root.appendChild(this.productListTable.getTarget());
  }

  renderCoinTable() {
    this.coinReturnTitle = new Title('잔돈');
    this.coinReturnButton = new Button(SELECTOR.ID_COIN_RETURN_BUTTON, '반환하기');
    this.coinReturnTable = new CoinTable({
      columns: ['동전', '개수'],
      initialData: [
        [COIN.COIN_500, null],
        [COIN.COIN_100, null],
        [COIN.COIN_50, null],
        [COIN.COIN_10, null],
      ],
      ids: COIN_TABLE_IDS,
    });
    this.$root.appendChild(this.coinReturnTitle.getTarget());
    this.$root.appendChild(this.coinReturnButton.getTarget());
    this.$root.appendChild(this.coinReturnTable.getTarget());
  }

  show() {
    this.$root.removeAttribute(DOM_ATTRIBUTE.HIDDEN);
  }

  hide() {
    this.$root.setAttribute(DOM_ATTRIBUTE.HIDDEN, true);
  }

  setEvent() {
    this.setRechargeEvent();
    this.setPurchaseEvent();
    this.setReturnEvent();
  }

  setRechargeEvent() {
    const { rechargeMoney } = this.props;
    this.chargingSubmit.getTarget().addEventListener(EVENT.CLICK, () => {
      const chargingValue = this.chargingInput.getTarget().value;

      if (isValidRecharge(chargingValue)) {
        rechargeMoney(chargingValue);
      }
    });
  }

  setPurchaseEvent() {
    const { purchaseProduct } = this.props;

    this.productListTable.getTarget().addEventListener(EVENT.CLICK, (e) => {
      if (e.target.className === SELECTOR.CLASS_PRODUCT_PURCHASE_BUTTON) {
        const $clickedProduct = e.target.closest(`.${SELECTOR.CLASS_PRODUCT_PURCHASE_ITEM}`);
        const name = this.getProductName($clickedProduct);
        const price = this.getProductPrice($clickedProduct);
        const quantity = this.getProductQuantity($clickedProduct);

        if (canBePurchase(this.vendingMachine.getRechargedMoneyAmount(), price)) {
          purchaseProduct({ name, price, quantity });
        }
      }
    });
  }

  setReturnEvent() {
    const { requestReturnCoin } = this.props;

    this.coinReturnButton.getTarget().addEventListener(EVENT.CLICK, () => {
      if (canBeReturn(this.vendingMachine.getRechargedCoinAmount())) {
        requestReturnCoin();
      }
    });
  }

  getProductName($clickedProduct) {
    const $productName = $clickedProduct.querySelector(`.${SELECTOR.CLASS_PRODUCT_PURCHASE_NAME}`);

    return $productName.dataset.productName;
  }

  getProductPrice($clickedProduct) {
    const $productPrice = $clickedProduct.querySelector(`
      .${SELECTOR.CLASS_PRODUCT_PURCHASE_PRICE}`);

    return $productPrice.dataset.productPrice;
  }

  getProductQuantity($clickedProduct) {
    const $productQuantity = $clickedProduct.querySelector(`
      .${SELECTOR.CLASS_PRODUCT_PURCHASE_QUANTITY}`);

    return $productQuantity.dataset.productQuantity;
  }

  updateRechargeMoneyState() {
    this.chargingAmount.render(this.vendingMachine.getRechargedMoneyAmount());
  }

  updateProductTable() {
    this.productListTable.render(this.vendingMachine.getProductList());
  }

  updateCoinTable() {
    this.coinReturnTable.render(this.vendingMachine.getRetrunedCoin());
  }
}
