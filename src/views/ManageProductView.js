import View from './View.js';

const ManageProductView = { ...View };

ManageProductView.setup = function (element) {
  this.init(element);
  return this;
};

ManageProductView.render = function () {
  this.element.innerHTML = `
    <h4>상품 추가하기</h4>
    <div>
      <input placeholder="상품명" id="product-name-input" type="text"/>
      <input placeholder="상품 가격" id="product-price-input" type="number"/>
      <input placeholder="수량" id="product-quantity-input" type="number"/>
      <button id="product-add-button">추가하기</button>
    </div>
    <h4>상품 현황</h4>
    <table>
      <thead> 
        <tr>
          <th>상품명</th>
          <th>상품 가격</th>
          <th>수량</th>
        <tr/>
      </thead>
    `;
};

export default ManageProductView;
