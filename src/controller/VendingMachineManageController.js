import { getRandomCoinList } from '../utils/getRandomCoinList.js';
import { getVendingMachineCoinListTemplate } from '../utils/template/vendingMachineManageTemplate.js';
import { isValidVendingMachineChargeData } from '../utils/validation/vendingMachineManageValidation.js';

class VendingMachineManageController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === 'vending-machine-manage-menu') {
      this.initScreen();
    }
  }

  initScreen() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    this.view.showVendingMachineManageScreen(tabMenu['vending_machine_manage_menu']);

    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    this.$vending_machine_charge_input = document.getElementById('vending-machine-charge-input');
    this.$vending_machine_coin_list = document.getElementById('vending-machine-coin-list');
    this.$vending_machine_charge_amount = document.getElementById('vending-machine-charge-amount');
    this.$vending_machine_charge_form = document.getElementById('vending-machine-charge-form');
  }

  initEventListener() {
    this.triggerVendingMachineChargeFormSubmitEvent();
  }

  showScreen(currentTabMenu) {
    if (currentTabMenu === this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);
    this.initScreen();
  }

  initChargeInputValue() {
    this.$vending_machine_charge_input.value = '';
  }

  vendingMachineChargeSubmitLogic(chargeInput) {
    const tabMenu = this.vendingMachine.getLocalStorage();
    const chargeNumber = parseInt(chargeInput, 10);

    this.changeLocalStorageManageMenuValue(tabMenu, chargeNumber);
    this.renderManageMenuContent(tabMenu);
  }

  changeLocalStorageManageMenuValue(tabMenu, chargeNumber) {
    const randomCoinList = getRandomCoinList(chargeNumber);

    tabMenu['vending_machine_manage_menu']['chargeAmount'] += chargeNumber;

    Object.keys(randomCoinList).forEach((coinKey) => {
      tabMenu['vending_machine_manage_menu']['coinList'][coinKey] += randomCoinList[coinKey];
    });

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  renderManageMenuContent(tabMenu) {
    const { coinList, chargeAmount } = tabMenu['vending_machine_manage_menu'];

    this.$vending_machine_charge_amount.innerText = chargeAmount;
    this.$vending_machine_coin_list.innerHTML = getVendingMachineCoinListTemplate(coinList);
  }

  triggerVendingMachineChargeFormSubmitEvent() {
    this.$vending_machine_charge_form.addEventListener('submit', (e) => {
      e.preventDefault();

      const chargeInput = this.$vending_machine_charge_input.value;

      if (isValidVendingMachineChargeData(chargeInput)) {
        this.initChargeInputValue();
        this.vendingMachineChargeSubmitLogic(chargeInput);
      }
    });
  }
}

export default VendingMachineManageController;
