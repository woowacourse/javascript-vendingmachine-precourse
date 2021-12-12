import { ID, CLASS } from '../constants/selectors.js';

const productPurchaseTemplate = {
  main: `
  <section>
    <h3>금액 투입</h3>
    <form>
      <input id="${ID.PRODUCT_PURCHASE.CHARGE_INPUT}" placeholder="투입할 금액" type="number"/>
      <button id="${ID.PRODUCT_PURCHASE.CHARGE_BUTTON}">투입하기</button>
    </form><br />
    투입한 금액: <span id="${ID.PRODUCT_PURCHASE.CHARGE_AMOUNT}"></span>
  </section><br />
  <section>
    <h3>구매할 수 있는 상품 현황</h3>
    <table id="${ID.PRODUCT_PURCHASE.TABLE}">
      <thead>
        <tr>
          <th>상품명</th><th>가격</th><th>수량</th><th>구매</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section><br />
  <section>
    <h3>잔돈</h3>
    <button id="${ID.COIN_RETURN.BUTTON}">반환하기</button>
    <table id="${ID.COIN_RETURN.TABLE}">
      <thead>
        <tr>
          <th>동전</th><th>개수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>500원</td><td id="${ID.COIN_RETURN.COIN_500_QUANTITY}"></td>
        </tr>
        <tr>
          <td>100원</td><td id="${ID.COIN_RETURN.COIN_100_QUANTITY}"></td>
        </tr>
        <tr>
          <td>50원</td><td id="${ID.COIN_RETURN.COIN_50_QUANTITY}"></td>
        </tr>
        <tr>
          <td>10원</td><td id="${ID.COIN_RETURN.COIN_10_QUANTITY}"></td>
        </tr>
      </tbody>
    </table>
  </section>
  `,
  tableItem: ({ name, price, quantity }) => `
  <tr class="${CLASS.PRODUCT_PURCHASE.ITEM}">
    <td class="${CLASS.PRODUCT_PURCHASE.NAME}" data-product-name=${name} >${name}</td>
    <td class="${CLASS.PRODUCT_PURCHASE.PRICE}" data-product-price=${price} >${price}</td>
    <td class="${CLASS.PRODUCT_PURCHASE.QUANTITY}" data-product-quantity=${quantity} >${quantity}</td>
    <td>
      <button class="${CLASS.PRODUCT_PURCHASE.BUTTON}">
        구매하기
      </button>
    </td>
  </tr>
  `,
};

export default productPurchaseTemplate;
