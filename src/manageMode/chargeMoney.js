import { $ } from '../dom.js';
import MakeRandomCoinList from './makeRandomCoinList.js';
import ManageModeDrawTable from './manageModeDrawTable.js';

function calculateTotalMoney(coinList) {
  let calculateMoney = 0;
  const coinUnit = [500,100,50,10]
  for (let i = 0; i < coinList.length; i++){
    calculateMoney += 500*parseInt(coinList[i].count);
  }
  return calculateMoney;
}
function drawTotalMoney(money,coinList) {
  let totalMoney = calculateTotalMoney(coinList) + parseInt(money);
  $('#vending-machine-charge-amount').innerText = `보유 금액: ${totalMoney}원`;
}
export default function ChargeMoney(money) {
  const coinList = JSON.parse(localStorage.getItem('coinList'));
  drawTotalMoney(money,coinList);
  const randomCoinList = MakeRandomCoinList(money, coinList);
  localStorage.setItem('coinList', JSON.stringify(randomCoinList));
  ManageModeDrawTable();
}