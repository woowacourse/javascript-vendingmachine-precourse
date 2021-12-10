import $ from '../utils/dom.js';

const renderProductAdd = () => {
  $('section').innerHTML = `
    <div id="product-add-content">
      <div id="product-add-input-wrap">
        <h3>상품 추가하기</h3>
        <form id="product-add-form">
          <input type="text" id="product-name-input" placeholder="상품명">
          <input type="number" id="product-price-input" placeholder="가격">
          <input type="number" id="product-quantity-input" placeholder="수량">
          <button id="product-add-button">추가하기</button>
        </form>
      </div>

      <div id="product-manage-wrap">
        <h3>상품 현황</h3>
        <table id="product-manage-table">
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  `;
};

export default renderProductAdd;
