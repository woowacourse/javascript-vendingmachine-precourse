import AdminController from './controller/adminController.js';
import ChargeController from './controller/chargeController.js';
import TapView from './view/tapView.js';
import { MENU_ELEMENT } from './constants/constants.js';
import PurchaseController from './controller/purchaseController.js';

class VendingMachine {
  constructor() {
    TapView.render();
    this.adminTap = document.querySelector(`#${MENU_ELEMENT.adminId}`);
    this.chargeTap = document.querySelector(`#${MENU_ELEMENT.chargeId}`);
    this.purchaseTap = document.querySelector(`#${MENU_ELEMENT.purchaseId}`);
    this.latestTap = localStorage.getItem('latestTap');
    this.viewLatestWork();
    this.bindEventListener();
  }

  bindEventListener() {
    this.bindAdminMenu();
    this.bindChargeMenu();
    this.bindPurchaseMenu();
  }

  setLatestWork(tap) {
    this.latestTap = tap;
    localStorage.setItem('latestTap', tap);
  }

  viewLatestWork() {
    if (this.latestTap === 'admin') AdminController.init();
    if (this.latestTap === 'charge') ChargeController.init();
    if (this.latestTap === 'purchase') PurchaseController.init();
  }

  bindAdminMenu() {
    this.adminTap.addEventListener('click', () => {
      this.setLatestWork('admin');
      AdminController.init();
    });
  }

  bindChargeMenu() {
    this.chargeTap.addEventListener('click', () => {
      this.setLatestWork('charge');
      ChargeController.init();
    });
  }

  bindPurchaseMenu() {
    this.purchaseTap.addEventListener('click', () => {
      this.setLatestWork('purchase');
      PurchaseController.init();
    });
  }
}

new VendingMachine();
