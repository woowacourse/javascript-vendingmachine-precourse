import View from './View.js';

const LayoutView = { ...View };

LayoutView.setup = function (element) {
  this.init(element);
  this.render();
  return this;
};

LayoutView.render = function () {
  this.element.innerHTML = `
        <h2>🥤자판기🥤</h2>
        <div id="tab-view">
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
        </div>
        <div id="result-view"></div>
    `;
};

export default LayoutView;
