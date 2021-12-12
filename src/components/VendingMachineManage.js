import { $, ID } from '../utils/dom.js';
import { vendingMachineManageMenuTemplate } from '../utils/templates.js';

const LS_KEY_CHARGES = 'charges';

export default class VendingMachineManage {
  constructor() {
    this.charges = [
      { coinType: 500, quantity: 0 },
      { coinType: 100, quantity: 0 },
      { coinType: 50, quantity: 0 },
      { coinType: 10, quantity: 0 },
    ];
    this.init();
  }

  init = () => {
    this.paintTemplate();
    this.loadCharges();
    this.paintLoadedCharges();
    $('form').addEventListener('submit', this.handleVendingMachineChargeSubmit);
  };

  paintTemplate = () => {
    $(`#${ID.PAGE_CONTENT}`).innerHTML = vendingMachineManageMenuTemplate();
  };

  loadCharges = () => {
    const loadedCharges = localStorage.getItem(LS_KEY_CHARGES);
    if (!loadedCharges) {
      return;
    }
    const parsedCharges = JSON.parse(loadedCharges);
    this.charges = parsedCharges;
    return;
  };

  paintLoadedCharges = () => {
    this.charges.map((coinType) => console.log(coinType));
  };

  handleVendingMachineChargeSubmit = (e) => {
    e.preventDefault();
    const charge = $(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`).value;
    console.log(charge);
    this.clearInputs();
  };

  clearInputs = () => {
    $(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`).value = '';
  };
}
