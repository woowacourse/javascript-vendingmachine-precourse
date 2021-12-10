import { EMPTY } from '../../constants/index.js';

const productAdd = tabData => `
  <div>
    <h2>상품 추가하기</h2>
    <form>
      <input type="text" id="product-name-input" maxlength="20" placeholder="상품명" />
      <input type="number" id="product-price-input" maxlength="20" placeholder="가격" />
      <input type="number" id="product-quantity-input" maxlength="20" placeholder="수량" />
      <button id="product-add-button">추가하기</button>
    </form>
  </div>
  <div>
    <h2>상품 현황</h2>
    <table>
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        ${tabData
          .map(
            ({ name, price, quantity }) => `
          <tr class="product-manage-item">
            <td class="product-manage-name">${name}</td>
            <td class="product-manage-price">${price}</td>
            <td class="product-manage-quantity">${quantity}</td>
          </tr>
          `,
          )
          .join(EMPTY)}
      </tbody>
    </table>
  </div>
  `;

export default productAdd;
