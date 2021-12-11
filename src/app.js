import AdminController from './controller/adminController.js';
import TapView from './view/tapView.js';
import { MENU_ELEMENT } from './constants/constants.js';

class VendingMachine {
  constructor() {
    TapView.render();
    this.adminTap = document.querySelector(`#${MENU_ELEMENT.adminId}`);
    this.bindEventListener();
  }

  bindEventListener() {
    this.bindAdminMenu();
  }

  bindAdminMenu() {
    this.adminTap.addEventListener('click', () => {
      AdminController.init();
    });
  }
}

new VendingMachine();
