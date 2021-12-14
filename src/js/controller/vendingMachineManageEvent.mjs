import {
  renderVendingMachineChargeAmount,
  renderVendingMachineManage,
  renderAmountCoins
} from '../view/index.mjs';
import { VendingMachine } from '../model/VendingMachine.mjs';

function renderVendingMachineManageTab() {
  document.querySelector('main').remove();
  renderVendingMachineManage();
}

function addCoins() {
  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#vending-machine-charge-button')) return;
    let chargeMoney = document.querySelector('#vending-machine-charge-input').value;

    if (localStorage.getItem('vending-machine-charge-amount')) {
      chargeMoney = Number(localStorage.getItem('vending-machine-charge-amount')) + Number(chargeMoney);
      localStorage.setItem('vending-machine-charge-amount', chargeMoney);
    } else {
      localStorage.setItem('vending-machine-charge-amount', chargeMoney);
    }
    renderVendingMachineChargeAmount();

    // 동전 개수 계산 -------------------------------------------------
    // 여기서 계산해주고 view로 view넘긴다.
    let amountOfCoins = {};
    if (localStorage.getItem('amount-of-coins')) {
      amountOfCoins = JSON.parse(localStorage.getItem('amount-of-coins'));
    } else {
      amountOfCoins = {
        '500_WON': 0,
        '100_WON': 0,
        '50_WON': 0,
        '10_WON': 0
      };
    }
    const cash = document.querySelector('#vending-machine-charge-input').value;
    const Array500 = Array.from({ length: cash / 500 + 1 }, (_, i) => i);
    let randomNum500 = MissionUtils.Random.pickNumberInList(Array500);
    amountOfCoins['500_WON'] += randomNum500;
    let remainCharge = cash - 500 * randomNum500;

    const Array100 = Array.from({ length: remainCharge / 100 + 1 }, (_, i) => i);

    let randomNum100 = MissionUtils.Random.pickNumberInList(Array100);
    amountOfCoins['100_WON'] += randomNum100;
    remainCharge = remainCharge - 100 * randomNum100;

    const Array50 = Array.from({ length: remainCharge / 50 + 1 }, (_, i) => i);

    let randomNum50 = MissionUtils.Random.pickNumberInList(Array50);
    amountOfCoins['50_WON'] += randomNum50;
    remainCharge = remainCharge - 50 * randomNum50;

    const Array10 = Array.from({ length: remainCharge / 10 + 1 }, (_, i) => i);

    amountOfCoins['10_WON'] += remainCharge / 10;
    remainCharge = 0;

    localStorage.setItem('amount-of-coins', JSON.stringify(amountOfCoins));

    renderAmountCoins();
  });
}

function amountCoins() {}

export function vendingMachineManageEvent() {
  const $vendingMachineManageMenu = document.querySelector('#vending-machine-manage-menu');
  $vendingMachineManageMenu.addEventListener('click', renderVendingMachineManageTab);

  addCoins();
  amountCoins();
}
