import { $ } from '../dom/dom.js';
import checkValidVendingMachineChargeInput from './checkValidVendingMachineChargeInput.js';

export default function getUserVendingMachineChargeInput() {
  let vendingCoin = false;
  if (
    checkValidVendingMachineChargeInput(
      $('#vending-machine-charge-input').value
    )
  ) {
    vendingCoin = $('#vending-machine-charge-input').value;
  }
  console.log(vendingCoin);
}
