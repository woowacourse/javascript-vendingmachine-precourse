import { DOM, LOCAL_STORAGE, EVENT } from '../utils/constant.js';
import SetVendingMachineCharge from './SetVendingMachineCharge.js';

export default class CheckVendingMachineManageMenu {
  constructor(render, coins) {
    this.render = render;
    this.coins = coins;
  }

  onClickVendingMachineChargeButton = () => {
    const $vendingMachineChargetButton = document.querySelector(DOM.$VENDING_MACHINE_CHARGE_BUTTON);
    $vendingMachineChargetButton.addEventListener(EVENT.CLICK, () => {
      new SetVendingMachineCharge(this.render, this.coins);
    });
  };

  hasTemplate = () => {
    const vendingMachineManageMenuTemplate = localStorage.getItem(LOCAL_STORAGE.VENDING_MACHINE_MANAGE_MENU);
    if (!vendingMachineManageMenuTemplate) {
      this.render.vendingMachineManageMenuTemplate();
      this.onClickVendingMachineChargeButton();

      return;
    }

    this.render.haveTemplate(vendingMachineManageMenuTemplate);
    this.onClickVendingMachineChargeButton();
  };
}
