import { CHARGE_AMOUNT, EMPTY, MACHINE_MANAGE, PRODUCT_ADD } from '../../constants/index.js';
import { tableCellStyle, tableStyle } from './style/index.js';

const purchaseMenu = tabData => `
  <div>
    <h2>금액 투입</h2>
    <form>
      <input type="number" id="charge-input" maxlength="20" placeholder="투입할 금액" />
      <button id="charge-button">투입하기</button>
    </form>
    <p>투입한 금액: <span id="charge-amount">${tabData[CHARGE_AMOUNT] || 0}</span>원</p>
  </div>
  <div>
    <h2>구매할 수 있는 상품 현황</h2>
    <table style="${tableStyle}">
      <thead>
        <tr>
          <th style="${tableCellStyle}">상품명</th>
          <th style="${tableCellStyle}">가격</th>
          <th style="${tableCellStyle}">수량</th>
          <th style="${tableCellStyle}">구매</th>
        </tr>
      </thead>
      <tbody>
        ${tabData[PRODUCT_ADD].map(
          ({ name, price, quantity }) => `
          <tr class="product-purchase-item">
            <td style="${tableCellStyle}" data-product-name=${name} class="product-purchase-name">${name}</td>
            <td style="${tableCellStyle}" data-product-price=${price} class="product-purchase-price">${price}</td>
            <td style="${tableCellStyle}" data-product-quantity=${quantity} class="product-purchase-quantity">${quantity}</td>
            <td style="${tableCellStyle}"><button class="purchase-button">구매하기</button></td>
          </tr>
          `,
        ).join(EMPTY)}
      </tbody>
    </table>
  </div>
  <div class="changes">
    <h3>잔돈</h3>
    <button id="coin-return-button">반환하기</button>
    <table style="${tableStyle}">
      <thead>
        <tr>
          <th style="${tableCellStyle}">동전</th>
          <th style="${tableCellStyle}">개수</th>
        </tr>
      </thead>
      <tbody>
        ${tabData[MACHINE_MANAGE].map(
          ({ description, count }) => `
          <tr>
            <td style="${tableCellStyle}">${description}원</td>
            <td style="${tableCellStyle}" id="coin-${description}-quantity">${count}개</td>
          </tr>
          `,
        ).join(EMPTY)}
      </tbody>
    </table>
  </div>
  `;

export default purchaseMenu;