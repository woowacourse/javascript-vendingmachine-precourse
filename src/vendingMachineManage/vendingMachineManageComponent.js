import VendingMachineManageView from './vendingMachineManageView.js';
import { $ } from '../utils/common.js';

export default class VendingMachineManageComponent {
  constructor() {
    this.vendingMachineManageView = new VendingMachineManageView();
  }

  render() {
    this.vendingMachineManageView.render();
    this.configureButton();
  }

  configureButton() {
    $(`#${buttonInfo.id}`).addEventListener('click', this.onClickButton);
  }

  onClickButton = () => {
    const inputCoin = Number($(`#${inputInfo.id}`).value);
  };
}
