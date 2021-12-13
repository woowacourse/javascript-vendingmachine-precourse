import { $ } from '../dom/dom.js';
import getUserVendingMachineChargeInput from '../modules/getUserVendingMachineChargeInput.js';
import setVendingCoinStorage from '../storage/setVendingCoinStorage.js';
import renderVendingMachineCoinInfo from '../views/renderVendingMachineCoinInfo.js';
import initVendingCoinInputElement from '../views/initVendingCoinInputElement.js';
import renderVendingMachineOwnCoinTable from '../views/renderVendingMachineOwnCoinTable.js';

export default function controlVendingMachineManage() {
  renderVendingMachineOwnCoinTable();
  $('#vending-machine-charge-button').addEventListener('click', () => {
    const userChargeInput = getUserVendingMachineChargeInput();
    if (userChargeInput !== false) {
      setVendingCoinStorage(userChargeInput);
      renderVendingMachineCoinInfo();
      initVendingCoinInputElement();
    }
  });
}
