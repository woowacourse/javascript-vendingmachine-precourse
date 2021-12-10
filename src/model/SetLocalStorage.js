import { DOM } from '../utils/constant.js';

export default class SetLocalStorage {
  productAddMenu = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    localStorage.setItem('productAddMenu', $vendingMachineSection.innerHTML);
  };
}
