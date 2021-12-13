import { renderVendingMachineManage } from '../view/index.mjs';
import { VendingMachine } from '../model/VendingMachine.mjs';

let machine = 0;

function renderVendingMachineManageTab() {
  document.querySelector('main').remove();
  renderVendingMachineManage();
}

function addCoins() {
  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#vending-machine-charge-button')) return;
    const chargeMoney = document.querySelector('#vending-machine-charge-input').value;

    if (localStorage.getItem('vending-machine-charge-amount')) {
      machine.chargeMoney(chargeMoney);
    } else {
      machine = new VendingMachine(chargeMoney);
    }
  });
}

export function vendingMachineManageEvent() {
  const $vendingMachineManageMenu = document.querySelector('#vending-machine-manage-menu');
  $vendingMachineManageMenu.addEventListener('click', renderVendingMachineManageTab);
  addCoins();
}
