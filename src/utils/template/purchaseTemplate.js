import { ID, LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage } from '../localStorage.js';

export const purchaseInputTemplate = () => {
  return `
    <h3>금액 투입</h3>
    <input id=${ID.CHARGE_INPUT} type="number" placeholder="투입할 금액" />
    <button id=${ID.CHARGE_BUTTON}>투입하기</button>
  `;
};

const totalCharge = () => {
  const total = getLocalStorage(LOCAL_DB.PURCHASE);
  if (total === 0) {
    return '';
  }

  return total;
};

export const totalPurchaseTemplate = () => {
  return `
    <p id=${ID.CHARGE_AMOUNT}>투입한 금액: ${totalCharge()}</p>
  `;
};
