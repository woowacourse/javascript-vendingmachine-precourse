import { vendingMachineChargeAmount, renderVendingMachineManage } from '../view/index.mjs';
import { VendingMachine } from '../model/VendingMachine.mjs';

function renderVendingMachineManageTab() {
  document.querySelector('main').remove();
  renderVendingMachineManage();
}

function addCoins() {
  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#vending-machine-charge-button')) return;
    let chargeMoney = document.querySelector('#vending-machine-charge-input').value;
    // const vendingMachineChargeAmount = document.querySelector('#vending-machine-charge-amount');

    // 재접속
    if (localStorage.getItem('vending-machine-charge-amount')) {
      chargeMoney = Number(localStorage.getItem('vending-machine-charge-amount')) + Number(chargeMoney);
      localStorage.setItem('vending-machine-charge-amount', chargeMoney);
    } else {
      localStorage.setItem('vending-machine-charge-amount', chargeMoney);

      // let machine = new VendingMachine(chargeMoney);
    }

    vendingMachineChargeAmount();
  });
}

export function vendingMachineManageEvent() {
  const $vendingMachineManageMenu = document.querySelector('#vending-machine-manage-menu');
  $vendingMachineManageMenu.addEventListener('click', renderVendingMachineManageTab);

  addCoins();
}
