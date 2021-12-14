import PurchaseModel from "./PurchaseModel.js";
import PurchaseView from "./PurchaseView.js";
import { CLASS, ID } from "../util/constant.js";

export default class PurchaseController {
  constructor(product, coinStorage) {
    this.model = new PurchaseModel();
    this.view = new PurchaseView();
    this.product = product;
    this.coinStorage = coinStorage;
    this.$container = document.getElementById(ID.APP);
  }

  init = () => {
    this.initPage();
    this.initDOMS();
    this.setEvent();
    this.updatePage();
  };

  initDOMS = () => {
    this.$chargeInput = document.getElementById(ID.CHARGE_INPUT);
    this.$chargeButton = document.getElementById(ID.CHARGE_BUTTON);
    this.$chargeAmountContainer = document.getElementById(ID.CHARGE_AMOUNT_CONTAINER);
    this.$chargeAmount = document.getElementById(ID.CHARGE_AMOUNT);
    this.$purchaseTableBody = document.getElementById(ID.PURCHASE_TABLE_BODY);
  };

  initPage = () => {
    this.view.renderPage(this.$container);
    this.coinStorage.view.renderChangesComponent(this.$container);
  };

  setEvent = () => {
    this.$chargeButton.addEventListener("click", this.setClickChargeButtonEvent);
    this.$container.addEventListener("click", this.setClickPurchaseButtonEvent);
    this.$container.addEventListener("click", this.setClickReturnButtonEvent);
  };

  setClickChargeButtonEvent = () => {
    const money = Number(this.$chargeInput.value);

    try {
      this.model.chargeMoney(money);
      this.updatePage();
    } catch (err) {
      alert(err);
    }
  };

  setClickPurchaseButtonEvent = ({ target }) => {
    if (target.className !== CLASS.PURCHASE_BUTTON) return;

    const product = target.closest("tr");
    const name = product.querySelector(`.${CLASS.PRODUCT_PURCHASE_NAME}`).dataset.productName;
    const price = product.querySelector(`.${CLASS.PRODUCT_PURCHASE_PRICE}`).dataset.productPrice;
    const quantity = product.querySelector(`.${CLASS.PRODUCT_PURCHASE_QUANTITY}`).dataset
      .productQuantity;

    try {
      this.buy({ name, price, quantity });
    } catch (err) {
      alert(err);
    }
  };

  setClickReturnButtonEvent = ({ target }) => {
    if (target.id !== ID.COIN_RETURN_BUTTON) return;

    const remainingMoney = this.model.getChargedMoney();

    this.return(remainingMoney);
  };

  buy = ({ name, price, quantity }) => {
    this.model.spendMoney(Number(price), Number(quantity));
    this.product.model.buyProduct(name);
    this.updatePage();
  };

  return = (remainingMoney) => {
    const returnedCoins = this.coinStorage.model.returnChanges(remainingMoney);

    this.model.decreaseChargedMoney(returnedCoins);
    this.coinStorage.view.renderReturnedCoinAmount(returnedCoins);
    this.updatePage();
  };

  updatePage = () => {
    const products = this.product.model.getProducts();

    this.view.renderChargedAmount(this.$chargeAmount, this.model.getChargedMoney());
    this.view.renderPurchaseTable(this.$purchaseTableBody, products);
  };
}
