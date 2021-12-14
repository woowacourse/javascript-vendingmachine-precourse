import { $id } from '../utils/dom.js';
import { getRandomCoinList } from '../utils/getRandomCoinList.js';
import { getVendingMachineCoinListTemplate } from '../utils/template.js';
import { isValidVendingMachineChargeData } from '../utils/validation/vendingMachineManageValidation.js';

class VendingMachineManageController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === 'vending-machine-manage-menu') {
      this.showScreen();
    }
  }

  showScreen() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    this.view.showVendingMachineManageScreen(tabMenu['vending_machine_manage_menu']);

    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    this.$vending_machine_charge_input = $id('vending-machine-charge-input');
    this.$vending_machine_coin_list = $id('vending-machine-coin-list');
    this.$vending_machine_charge_amount = $id('vending-machine-charge-amount');
    this.$vending_machine_charge_form = $id('vending-machine-charge-form');
  }

  initEventListener() {
    this.triggerVendingMachineChargeSubmitEvent();
  }

  initVendingMachineChargeInputValue() {
    this.$vending_machine_charge_input.value = '';
  }

  render(currentTabMenu) {
    if (currentTabMenu === this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);
    this.showScreen();
  }

  renderVendingMachineChargeLocalStorage(vendingMachineChargeNumber) {
    const tabMenu = this.vendingMachine.getLocalStorage();
    const coinList = getRandomCoinList(vendingMachineChargeNumber);

    tabMenu['vending_machine_manage_menu']['chargeAmount'] += vendingMachineChargeNumber;
    Object.keys(coinList).forEach((coin) => {
      tabMenu['vending_machine_manage_menu']['coinList'][coin] += coinList[coin];
    });

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  renderVendingMachineCharge(vendingMachineChargeInput) {
    const tabMenu = this.vendingMachine.getLocalStorage();
    const vendingMachineChargeNumber = parseInt(vendingMachineChargeInput, 10);

    this.renderVendingMachineChargeLocalStorage(vendingMachineChargeNumber);

    this.$vending_machine_coin_list.innerHTML = getVendingMachineCoinListTemplate(
      tabMenu['vending_machine_manage_menu']['coinList']
    );

    this.$vending_machine_charge_amount.innerText =
      tabMenu['vending_machine_manage_menu']['chargeAmount'];
  }

  initVendingMachineChargeInputValue() {
    this.$vending_machine_charge_input.value = '';
  }

  triggerVendingMachineChargeSubmitEvent() {
    this.$vending_machine_charge_form.addEventListener('submit', (e) => {
      e.preventDefault();

      const vendingMachineChargeInput = this.$vending_machine_charge_input.value;

      if (isValidVendingMachineChargeData(vendingMachineChargeInput)) {
        this.initVendingMachineChargeInputValue();
        this.renderVendingMachineCharge(vendingMachineChargeInput);
      }
    });
  }

  triggerTabMenuClickEvent() {
    this.$vending_machine_manage_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });
  }
}

export default VendingMachineManageController;
