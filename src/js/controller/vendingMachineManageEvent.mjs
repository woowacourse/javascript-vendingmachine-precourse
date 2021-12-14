import {
  renderVendingMachineChargeAmount,
  renderVendingMachineManagePage,
  renderAmountCoins
} from '../view/index.mjs';

import { high10MoneyValidate } from './util/validate.mjs';

import { vendingMachine } from '../model/VendingMachine.mjs';

function initVendingMachineManagePage() {
  document.querySelector('main').remove();
  renderVendingMachineManagePage();
}

function vendingMachineCoinQuantity() {
  let chargeMoney = document.querySelector('#vending-machine-charge-input').value;
  vendingMachine.getAmountOfCoins(chargeMoney);

  renderAmountCoins();
}

function addCoinButton() {
  let chargeMoney = document.querySelector('#vending-machine-charge-input').value;

  if (!high10MoneyValidate(chargeMoney)) return;
  vendingMachine.sumMoney(chargeMoney);

  renderVendingMachineChargeAmount();
  vendingMachineCoinQuantity();
}

export function vendingMachineManageEvent() {
  const $vendingMachineManageMenu = document.querySelector('#vending-machine-manage-menu');
  $vendingMachineManageMenu.addEventListener('click', initVendingMachineManagePage);

  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#vending-machine-charge-button')) return;
    addCoinButton();
  });
}
