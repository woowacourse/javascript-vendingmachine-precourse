import CoinStorageController from "./coinStorage/coinStorageController.js";
import ProductController from "./product/ProductController.js";
import PurchaseController from "./purchase/purchaseController.js";

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
    this.purchase = new PurchaseController();
  };

  renderHeader = () => {
    const template = `
      <div id="head">
        <h1>🥤자판기🥤</h1>
        <button id="product-add-menu">상품관리</button>
        <button id="vending-machine-manage-menu">잔돈충전</button>
        <button id="product-purchase-menu">상품 구매</button>
      </div>
    `;
    this.$container.insertAdjacentHTML("beforeend", template);
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
