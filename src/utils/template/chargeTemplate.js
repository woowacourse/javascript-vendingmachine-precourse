import { ID, LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage } from '../localStorage.js';

const totalCharge = list => {
  const total = list
    .map(({ name, count }) => name * count)
    .reduce((a, b) => a + b, 0);

  if (total === 0) {
    return '';
  }

  return total;
};

export const chargeInputTemplate = () => {
  return `
    <h3>자판기 동전 충전하기</h3>
    <input id=${ID.VENDING_MACHINE_CHARGE_INPUT} type="number" placeholder="자판기가 보유할 금액" />
    <button id=${ID.VENDING_MACHINE_CHARGE_BUTTON}>충전하기</button>
  `;
};

export const totalChargeTemplate = () => {
  return `
    <p> 보유 금액: 
      <span id=${ID.VENDING_MACHINE_CHARGE_AMOUNT}>${totalCharge(
    getLocalStorage(LOCAL_DB.COIN)
  )}</span>
    </p>
  `;
};
