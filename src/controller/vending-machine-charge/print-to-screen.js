import { $ } from '../../dom/dom.js';
import { getRandomCoinsAmongList } from '../../utils.js';

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

  return sum;
};

export const printAmountOfCoinToScreen = () => {
  const sum = printMoneyToScreen();
  const randomCoinAmount = getRandomCoinsAmongList(sum);
  const $vendingMachine500Coin = $('#vending-machine-coin-500-quantity');
  const $vendingMachine100Coin = $('#vending-machine-coin-100-quantity');
  const $vendingMachine50Coin = $('#vending-machine-coin-50-quantity');
  const $vendingMachine10Coin = $('#vending-machine-coin-10-quantity');

  $vendingMachine500Coin.innerHTML = `${randomCoinAmount['500']}개`;
  $vendingMachine100Coin.innerHTML = `${randomCoinAmount['100']}개`;
  $vendingMachine50Coin.innerHTML = `${randomCoinAmount['50']}개`;
  $vendingMachine10Coin.innerHTML = `${randomCoinAmount['10']}개`;
};

// 전역으로 설정시 새로고침해도 보이고, 버튼이벤트 안 설정시 이벤트가 작동해야지 보인다.
//즉 , 전역변수 설정 하거나 없이도 새로고침했을때 나타날 수 있는 방법 고민
