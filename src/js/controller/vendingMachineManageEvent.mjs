import { renderVendingMachineManage } from '../view/index.mjs';

function renderVendingMachineManageTab() {
  document.querySelector('main').remove();
  renderVendingMachineManage();
}

export function vendingMachineManageEvent() {
  const $vendingMachineManageMenu = document.querySelector(
    '#vending-machine-manage-menu'
  );
  $vendingMachineManageMenu.addEventListener(
    'click',
    renderVendingMachineManageTab
  );
}
