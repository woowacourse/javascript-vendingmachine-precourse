import { CHANGE_CHARGE } from '../constants/selector.js';

function ChangeInputForm() {
  return `
    <form>
      <input
        type="number"
        id="${CHANGE_CHARGE.ID.CHARGE_INPUT}"
        placeholder="자판기가 보유할 금액"
      />
      <button type="button" id="${CHANGE_CHARGE.ID.CHARGE_BUTTON}">
        추가하기
      </button>
    </form>
    `;
}

export default function changeInput() {
  return `
      <h2>자판기 동전 충전하기</h2>
        ${ChangeInputForm()}
        <br>
        보유 금액: <span id="${CHANGE_CHARGE.ID.CHARGE_AMOUNT}"></span>
      <br>
      `;
}
