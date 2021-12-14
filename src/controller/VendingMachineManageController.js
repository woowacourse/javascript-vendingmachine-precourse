import { ID, TAB_MENU } from '../utils/constants.js';
import { getRandomCoinList } from '../utils/getRandomCoinList.js';
import { getVendingMachineCoinListTemplate } from '../utils/template/vendingMachineManageTemplate.js';
import { isValidVendingMachineChargeData } from '../utils/validation/vendingMachineManageValidation.js';

class VendingMachineManageController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === ID.VENDING_MACHINE_MANAGE_MENU) {
      this.initScreen();
    }
  }

  initScreen() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    this.view.showVendingMachineManageScreen(tabMenu[TAB_MENU.VENDING_MACHINE_MANAGE_MENU]);

    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    this.$vending_machine_charge_input = document.getElementById(ID.VENDING_MACHINE_CHARGE_INPUT);
    this.$vending_machine_coin_list = document.getElementById(ID.VENDING_MACHINE_COIN_LIST);
    this.$vending_machine_charge_amount = document.getElementById(ID.VENDING_MACHINE_CHARGE_AMOUNT);
    this.$vending_machine_charge_form = document.getElementById(ID.VENDING_MACHINE_CHARGE_FORM);
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

    tabMenu[TAB_MENU.VENDING_MACHINE_MANAGE_MENU]['chargeAmount'] += chargeNumber;

    Object.keys(randomCoinList).forEach((coinKey) => {
      tabMenu[TAB_MENU.VENDING_MACHINE_MANAGE_MENU]['coinList'][coinKey] += randomCoinList[coinKey];
    });

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  renderManageMenuContent(tabMenu) {
    const { coinList, chargeAmount } = tabMenu[TAB_MENU.VENDING_MACHINE_MANAGE_MENU];

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
