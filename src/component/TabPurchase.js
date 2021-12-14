/* eslint-disable class-methods-use-this */
import Tab from './core/Tab.js';
import Title from './core/Title.js';
import Input from './core/Input.js';
import Button from './core/Button.js';
import ProductPurchaseTable from './core/ProductPurchaseTable.js';
import CoinTable from './core/CoinTable.js';
import AmountView from './core/AmountView.js';
import { isValidRecharge, canBePurchase, canBeReturn } from '../utils/validation.js';
import { TAB_ID } from '../constant/dataset.js';
import { ID, CLASS } from '../constant/selector.js';
import { EVENT, INPUT_TYPE } from '../constant/dom.js';
import { TITLE, PLACEHOLDER, COLUMN } from '../constant/text.js';
import { COIN } from '../constant/coin.js';

const PRODUCT_TABLE_COLUMN = [COLUMN.NAME, COLUMN.PURCHASE, COLUMN.QUANTITY, COLUMN.PURCHASE];
const PRODUCT_TABLE_CLASS = [
  CLASS.PRODUCT_PURCHASE_NAME,
  CLASS.PRODUCT_PURCHASE_PRICE,
  CLASS.PRODUCT_PURCHASE_QUANTITY,
  CLASS.PRODUCT_PURCHASE_BUTTON,
];
const COIN_TABLE_COLUMN = [COLUMN.COIN, COLUMN.COUNT];
const COIN_TABLE_IDS = {
  [COIN.COIN_500]: ID.COIN_500_QUANTITY,
  [COIN.COIN_100]: ID.COIN_100_QUANTITY,
  [COIN.COIN_50]: ID.COIN_50_QUANTITY,
  [COIN.COIN_10]: ID.COIN_10_QUANTITY,
};

export default class TabPurchase extends Tab {
  constructor($parent, props) {
    super($parent, props, ID.PURCHASE_TAB, TAB_ID.TAB_PURCHASE);

    this.render();
    this.setEvent();
  }

  render() {
    this.renderInput();
    this.renderProductTable();
    this.renderCoinTable();
  }

  renderInput() {
    this.chargingTitle = new Title(TITLE.RECHARGE_MONEY);
    this.chargingInput = new Input(ID.CHARGE_INPUT, PLACEHOLDER.MONEY, INPUT_TYPE.NUMBER);
    this.chargingSubmit = new Button(ID.CHARGE_BUTTON, TITLE.RECHARGE_MONEY_BUTTON);
    this.chargingAmount = new AmountView(
      ID.CHARGE_AMOUNT,
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
      classes: PRODUCT_TABLE_CLASS,
      initialData: this.vendingMachine.getProductList(),
    });
    this.$root.appendChild(this.productListTitle.getTarget());
    this.$root.appendChild(this.productListTable.getTarget());
  }

  renderCoinTable() {
    this.coinReturnTitle = new Title(TITLE.RETURN_COIN);
    this.coinReturnButton = new Button(ID.COIN_RETURN_BUTTON, TITLE.RETURN_COIN_BUTTON);
    this.coinReturnTable = new CoinTable({
      columns: COIN_TABLE_COLUMN,
      initialData: this.vendingMachine.getReturnedCoin(),
      ids: COIN_TABLE_IDS,
    });
    this.$root.appendChild(this.coinReturnTitle.getTarget());
    this.$root.appendChild(this.coinReturnButton.getTarget());
    this.$root.appendChild(this.coinReturnTable.getTarget());
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
      if (e.target.className === CLASS.PRODUCT_PURCHASE_BUTTON) {
        const $clickedProduct = e.target.closest(`.${CLASS.PRODUCT_PURCHASE_ITEM}`);
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
    const $productName = $clickedProduct.querySelector(`.${CLASS.PRODUCT_PURCHASE_NAME}`);

    return $productName.dataset.productName;
  }

  getProductPrice($clickedProduct) {
    const $productPrice = $clickedProduct.querySelector(`
      .${CLASS.PRODUCT_PURCHASE_PRICE}`);

    return $productPrice.dataset.productPrice;
  }

  getProductQuantity($clickedProduct) {
    const $productQuantity = $clickedProduct.querySelector(`
      .${CLASS.PRODUCT_PURCHASE_QUANTITY}`);

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
