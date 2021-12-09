export default class VendingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
    this.view.renderInApp('afterbegin', VendingController.createTabMenus());
  }

  static createTabMenus() {
    const $tabMenus = `
      <div>
        <h1>🥤자판기🥤</h1>
        <button id="product-add-menu" style="cursor: pointer">상품 관리</button>
        <button id="vending-machine-manage-menu" style="cursor: pointer">잔돈 충전</button>
        <button id="product-purchase-menu" style="cursor: pointer">상품 구매</button>
      </div>
`;
    return $tabMenus;
  }
}
