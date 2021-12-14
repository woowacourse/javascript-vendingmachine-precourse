import { COINS, NONE } from './constants.js';

export const purchaseTemplates = {
  inputMoney(money) {
    return `
      <input id="charge-input" type="number" placeholder="투입할 금액" />
      <button id="charge-button">투입하기</button>
      <h4 id="charge-amount">투입한 금액: ${money}원</h4>
    `;
  },

  productTable: `
    <div id="product-table">
       <h3>구매할 수 있는 상품 현황</h3>
       <table style='width: 70%'>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
          </tr>
        </thead>
        <tbody class="product-purchase-list">
        </tbody>
      </table>
    <div>
    `,
  productItem(product) {
    const { id, name, price, quantity } = product;
    return `
      <tr class="product-purchase-item" data-product-id=${id}>
        <td class="product-purchase-name" data-product-name=${name}>${name}</td>
        <td class="product-purchase-price" data-product-price=${price}>${price}</td>
        <td class="product-purchase-quantity" data-product-quantity=${quantity}>${quantity}</td>
        <td><button class="purchase-button">구매하기</button></td>
      </tr>
    `;
  },

  change(change) {
    return `
    <h3>잔돈</h3>
    <button id="coin-return-button">반환하기</button>
    <button id="refresh-change">잔돈 초기화</button>
     <table style='margin-top: 20px; width: 30%;'}>
      <thead>
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>500원</td>
          <td id="coin-500-quantity">${change[COINS[0]]}개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id="coin-100-quantity">${change[COINS[1]]}개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id="coin-50-quantity">${change[COINS[2]]}개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id="coin-10-quantity">${change[COINS[3]]}개</td>
        </tr>
      </tbody>
    </table>
    `;
  },
};
