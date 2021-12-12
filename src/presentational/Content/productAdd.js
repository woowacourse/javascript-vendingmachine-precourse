import { EMPTY } from '../../constants/index.js';
import { tableCellStyle, tableStyle } from './style/index.js';

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
    <table style="${tableStyle}">
      <thead>
        <tr>
          <th style="${tableCellStyle}">상품명</th>
          <th style="${tableCellStyle}">가격</th>
          <th style="${tableCellStyle}">수량</th>
        </tr>
      </thead>
      <tbody>
        ${tabData
          .map(
            ({ name, price, quantity }) => `
          <tr class="product-manage-item">
            <td style="${tableCellStyle}" class="product-manage-name">${name}</td>
            <td style="${tableCellStyle}" class="product-manage-price">${price}</td>
            <td style="${tableCellStyle}" class="product-manage-quantity">${quantity}</td>
          </tr>
          `,
          )
          .join(EMPTY)}
      </tbody>
    </table>
  </div>
  `;

export default productAdd;
