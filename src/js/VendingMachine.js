import CoinStorageController from "./coinStorage/coinStorageController.js";
import ProductController from "./product/ProductController.js";
import PurchaseController from "./purchase/purchaseController.js";
import { INIT_TEMPLATE } from "./template/init-template.js";

export default class VendingMachine {
  constructor() {
    this.$container = document.getElementById("app");
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
    if (target.id === "product-add-menu") {
      this.renderProductManagePage();
    } else if (target.id === "vending-machine-manage-menu") {
      this.renderCoinStoragePage();
    } else if (target.id === "product-purchase-menu") {
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
