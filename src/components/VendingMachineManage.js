import { $, ID } from '../utils/dom.js';
import { vendingMachineManageMenuTemplate } from '../utils/templates.js';

export default class VendingMachineManage {
  constructor() {
    this.init();
  }

  init = () => {
    $(`#${ID.PAGE_CONTENT}`).innerHTML = vendingMachineManageMenuTemplate();
  };
}
