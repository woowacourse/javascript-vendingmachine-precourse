import { $ } from '../../utils/querySelector.js';

const productManageTemplate = `
  <style>
    table {
      width: 25em;
      border: 1px solid #444444;
      border-collapse: collapse;
    }
    th,td {
      border: 1px solid #444444;
      text-align: center;
      padding: 10px 0;
    }
  </style>

  <div>
    <h3>상품 추가하기</h3>
    <form>
      <input type="text" id="product-name-input" placeholder="상품명" />
      <input type="number" id="product-price-input" placeholder="가격" />
      <input type="number" id="product-quantity-input" placeholder="수량" />
      <button id="product-add-button">추가하기</button>
    </form>
  </div>
  <br/>
  <div>
    <h3>상품 현황</h3>
    <table>
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody class="product-manage-list"></tbody>
    </table>
  </div>
`;

const productItemTemplate = ({ name, price, quantity }) => {
  return `
  <tr class="product-manage-item">
    <td class="product-manage-name">${name}</td>
    <td class="product-manage-price">${price}</td>
    <td class="product-manage-quantity">${quantity}</td>
  </tr>
  `;
};

const addProductItem = (productData) => {
  const productItem = productItemTemplate(productData);
  $('.product-manage-list').insertAdjacentHTML('beforeend', productItem);
};

const initProductManageScreen = (storedProductItems) => {
  storedProductItems.forEach((item) => {
    addProductItem(item);
  });
};

export { productManageTemplate, productItemTemplate, addProductItem, initProductManageScreen };
