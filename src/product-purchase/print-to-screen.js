import { $ } from '../common/dom/dom.js';

export const printInsertedMoney = () => {
  const moneychargedAmountList = JSON.parse(
    localStorage.getItem('moneyChargedAmount')
  );
  const $moneyChargePtag = $('#charge-amount');
  let amountArray = [];
  let sum = 0;

  for (let i = 0; i < moneychargedAmountList.length; i++) {
    amountArray.push(moneychargedAmountList[i].value);
  }
  sum = amountArray.reduce((a, b) => a + b);
  $moneyChargePtag.innerHTML = `투입한 금액: ${sum}원`;
};
