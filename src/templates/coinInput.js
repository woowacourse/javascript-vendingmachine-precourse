import { PRODUCT_PURCHASE } from '../constants/selector.js';

function coinInputForm() {
  return `
    <form>
    <input
      type="number"
      id="${PRODUCT_PURCHASE.ID.CHARGE_INPUT}"
      placeholder="투입할 금액"
    />
    <button type="button" id="${PRODUCT_PURCHASE.ID.CHARGE_BUTTON}">
      투입하기
    </button>
  </form>
      `;
}

export default function coinInput(insertedCoin) {
  return `
        <h2>자판기 동전 충전하기</h2>
          ${coinInputForm()}
          <br>
          투입한 금액: <span id="${PRODUCT_PURCHASE.ID.CHARGE_AMOUNT}">${insertedCoin.insertCoin}</span>
        <br>
        `;
}
