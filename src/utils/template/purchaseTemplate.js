import { ID } from '../../constants/index.js';

export const purchaseInputTemplate = () => {
  return `
    <h3>금액 투입</h3>
    <input id=${ID.CHARGE_INPUT} type="number" placeholder="투입할 금액" />
    <button id=${ID.CHARGE_BUTTON}>투입하기</button>
  `;
};
