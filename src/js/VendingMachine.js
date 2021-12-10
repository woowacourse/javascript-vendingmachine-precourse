import CoinStorageController from "./coinStorage/coinStorageController.js";
import ProductController from "./product/ProductController.js";
import PurchaseController from "./purchase/purchaseController.js";
import { INIT_TEMPLATE } from "./template/init-template.js";
import { ID } from "./util/constant.js";

export default class VendingMachine {
  constructor() {
    this.$container = document.getElementById(ID.APP);
  }

  init = () => {
    this.renderHeader();
    this.createComponents();
    this.setEvent();
    this.renderProductManagePage();
  };

  createComponents = () => {
    this.product = new ProductController();
    this.coinStorage = new CoinStorageController();
    this.purchase = new PurchaseController(this.product, this.coinStorage);
  };

  renderHeader = () => {
    this.$container.insertAdjacentHTML("beforeend", INIT_TEMPLATE);
  };

  setEvent = () => {
    this.$container.addEventListener("click", this.setClickMenuButton);
  };

  setClickMenuButton = ({ target }) => {
    if (target.id === ID.PRODUCT_ADD_MENU) {
      this.renderProductManagePage();
    } else if (target.id === ID.VENDING_MACHINE_MANAGE_MENU) {
      this.renderCoinStoragePage();
    } else if (target.id === ID.PRODUCT_PURCHASE_MENU) {
      this.renderPurchasePage();
    }
  };

  resetpage = () => {
    this.$container.innerHTML = "";
    this.renderHeader();
  };

  renderProductManagePage = () => {
    this.resetpage();
    this.product.init();
  };

  renderCoinStoragePage = () => {
    this.resetpage();
    this.coinStorage.init();
  };

  renderPurchasePage = () => {
    this.resetpage();
    this.purchase.init();
  };
}
