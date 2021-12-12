import { $ } from '../../dom/dom.js';

export const printMoneyToScreen = () => {
  const chargedAmountList = JSON.parse(localStorage.getItem('chargedAmount'));
  const $currentMachineMoney = $('#vending-machine-charge-amount');
  let amountArray = [];
  let sum = 0;

  for (let i = 0; i < chargedAmountList.length; i++) {
    amountArray.push(chargedAmountList[i].value);
  }

  sum = amountArray.reduce((a, b) => a + b);
  $currentMachineMoney.innerHTML = `보유금액: ${sum}원`;
};
