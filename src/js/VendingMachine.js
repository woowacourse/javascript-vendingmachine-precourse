import ProductController from "./product/ProductController.js";

export default class VendingMachine {
  constructor() {
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.renderHeader();
    this.createComponents();
    this.product.init();
  };

  createComponents = () => {
    this.product = new ProductController();
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
}
