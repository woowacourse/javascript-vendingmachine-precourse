import { $id } from '../utils/dom.js';
import { getRandomCoinList } from '../utils/getRandomCoinList.js';
import { getVendingMachineCoinListTemplate } from '../utils/template.js';
import { isValidVendingMachineCharge } from '../utils/validation.js';

class VendingMachineManageController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === 'vending-machine-manage-menu') {
      this.init();
    }
  }
  init() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    this.view.showVendingMachineManageScreen(tabMenu['vending_machine_manage_menu']);
    this.triggerVendingMachineChargeSubmitEvent();
  }

  initVendingMachineChargeInputValue() {
    $id('vending-machine-charge-input').value = '';
  }

  render(currentTabMenu) {
    if (currentTabMenu === this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);
    this.renderCurrentTabMenu();
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

    $id('vending-machine-coin-list').innerHTML = getVendingMachineCoinListTemplate(
      tabMenu['vending_machine_manage_menu']['coinList']
    );

    $id('vending-machine-charge-amount').innerText =
      tabMenu['vending_machine_manage_menu']['chargeAmount'];
  }

  renderCurrentTabMenu() {
    const tabMenu = this.vendingMachine.getLocalStorage();

    this.view.showVendingMachineManageScreen(tabMenu['vending_machine_manage_menu']);
    this.triggerVendingMachineChargeSubmitEvent();
  }

  initVendingMachineChargeInputValue() {
    $id('vending-machine-charge-input').value = '';
  }

  triggerVendingMachineChargeSubmitEvent() {
    $id('vending-machine-charge-form').addEventListener('submit', (e) => {
      e.preventDefault();

      const vendingMachineChargeInput = $id('vending-machine-charge-input').value;

      if (isValidVendingMachineCharge(vendingMachineChargeInput)) {
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
