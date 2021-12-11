import { $ } from '../dom/dom.js';
import getUserVendingMachineChargeInput from '../modules/getUserVendingMachineChargeInput.js';
import setVendingCoinStorage from '../storage/setVendingCoinStorage.js';
import renderVendingMachineCoinInfo from '../views/renderVendingMachineCoinInfo.js';
import initVendingCoinInputElement from '../views/initVendingCoinInputElement.js';

export default function controlVendingMachineManage() {
  $('#vending-machine-charge-button').addEventListener('click', () => {
    let userChargeInput = getUserVendingMachineChargeInput();
    if (userChargeInput !== false) {
      setVendingCoinStorage(userChargeInput);
      renderVendingMachineCoinInfo();
      initVendingCoinInputElement();
    }
  });
}
