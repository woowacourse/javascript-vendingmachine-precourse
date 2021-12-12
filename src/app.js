import AdminController from './controller/adminController.js';
import ChargeController from './controller/chargeController.js';
import TapView from './view/tapView.js';
import { MENU_ELEMENT } from './constants/constants.js';

class VendingMachine {
  constructor() {
    TapView.render();
    this.adminTap = document.querySelector(`#${MENU_ELEMENT.adminId}`);
    this.chargeTap = document.querySelector(`#${MENU_ELEMENT.chargeId}`);
    this.bindEventListener();
  }

  bindEventListener() {
    this.bindAdminMenu();
    this.bindChargeMenu();
  }

  bindAdminMenu() {
    this.adminTap.addEventListener('click', () => {
      AdminController.init();
    });
  }

  bindChargeMenu() {
    this.chargeTap.addEventListener('click', () => {
      ChargeController.init();
    });
  }
}

new VendingMachine();
