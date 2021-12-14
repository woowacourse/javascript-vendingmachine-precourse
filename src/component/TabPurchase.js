/* eslint-disable class-methods-use-this */
import Navigator from '../store/Navigator.js';
import VendingMachine from '../store/VendingMachine.js';
import Title from './core/Title.js';
import Input from './core/Input.js';
import Button from './core/Button.js';
import ProductPurchaseTable from './core/ProductPurchaseTable.js';
import CoinTable from './core/CoinTable.js';
import AmountView from './core/AmountView.js';
import { isValidRecharge, canBePurchase, canBeReturn } from '../utils/validation.js';
import { TAB_ID } from '../constant/dataset.js';
import { TAG, DOM_ATTRIBUTE, SELECTOR, EVENT, INPUT_TYPE } from '../constant/dom.js';
import { TITLE, PLACEHOLDER, COLUMN } from '../constant/text.js';
import { COIN } from '../constant/coin.js';

const PRODUCT_TABLE_COLUMN = [COLUMN.NAME, COLUMN.PURCHASE, COLUMN.QUANTITY, COLUMN.PURCHASE];
const COIN_TABLE_COLUMN = [COLUMN.COIN, COLUMN.COUNT];
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
    this.chargingTitle = new Title(TITLE.RECHARGE_MONEY);
    this.chargingInput = new Input(SELECTOR.ID_CHARGE_INPUT, PLACEHOLDER.MONEY, INPUT_TYPE.NUMBER);
    this.chargingSubmit = new Button(SELECTOR.ID_CHARGE_BUTTON, TITLE.RECHARGE_MONEY_BUTTON);
    this.chargingAmount = new AmountView(
      SELECTOR.ID_CHARGE_AMOUNT,
      TITLE.RECHARGE_MONEY_AMOUNT,
      this.vendingMachine.getRechargedMoneyAmount()
    );

    this.$root.appendChild(this.chargingTitle.getTarget());
    this.$root.appendChild(this.chargingInput.getTarget());
    this.$root.appendChild(this.chargingSubmit.getTarget());
    this.$root.appendChild(this.chargingAmount.getTarget());
  }

  renderProductTable() {
    this.productListTitle = new Title(TITLE.PURCHASABLE_PRODUCT_LIST);
    this.productListTable = new ProductPurchaseTable({
      columns: PRODUCT_TABLE_COLUMN,
      classes: [
        SELECTOR.CLASS_PRODUCT_PURCHASE_NAME,
        SELECTOR.CLASS_PRODUCT_PURCHASE_PRICE,
        SELECTOR.CLASS_PRODUCT_PURCHASE_QUANTITY,
        SELECTOR.CLASS_PRODUCT_PURCHASE_BUTTON,
      ],
      initialData: this.vendingMachine.getProductList(),
    });
    this.$root.appendChild(this.productListTitle.getTarget());
    this.$root.appendChild(this.productListTable.getTarget());
  }

  renderCoinTable() {
    this.coinReturnTitle = new Title(TITLE.RETURN_COIN);
    this.coinReturnButton = new Button(SELECTOR.ID_COIN_RETURN_BUTTON, TITLE.RETURN_COIN_BUTTON);
    this.coinReturnTable = new CoinTable({
      columns: COIN_TABLE_COLUMN,
      initialData: this.vendingMachine.getReturnedCoin(),
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
    this.coinReturnTable.render(this.vendingMachine.getReturnedCoin());
  }
}
