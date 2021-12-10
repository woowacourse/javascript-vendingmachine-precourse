import { $ } from '../../utils/querySelector.js';

export const productManageTemplate = `
  <h3>상품 추가하기</h3>
  <form>
    <input type="text" id="product-name-input" placeholder="상품명" />
    <input type="number" id="product-price-input" placeholder="가격" />
    <input type="number" id="product-quantity-input" placeholder="수량" />
    <button id="product-add-button">추가하기</button>
  </form>
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
`;

export const productItemTemplate = ({ name, price, quantity }) => {
  return `
  <tr class="product-manage-item">
    <td class="product-manage-name">${name}</td>
    <td class="product-manage-price">${price}</td>
    <td class="product-manage-quantity">${quantity}</td>
  </tr>
  `;
};

export const addProductItem = (productData) => {
  const productItem = productItemTemplate(productData);
  $('.product-manage-list').insertAdjacentHTML('beforeend', productItem);
};

export const initProductManageScreen = (storedProductItems) => {
  storedProductItems.forEach((item) => {
    addProductItem(item);
  });
};
