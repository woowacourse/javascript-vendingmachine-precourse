import { $, default as DOM } from '../views/DOMUtils.js';
import { default as V } from '../utils/validators.js';
import { default as DB } from '../model/database.js';
import { default as UT } from '../utils/utils.js';
import calculateReturnCoins from './utils/calculateReturnCoins.js';
import getAllPurchaseButton from './utils/getAllPurchaseButton.js';

export default class ProductPurchaseManager {
  constructor() {
    this.render();
    this.manage();
  }

  render() {
    DOM.showChargeToPurchaseProduct();
    DOM.showIntentoryToPurchaseProduct();
  }

  manage() {
    this.manageChargeToPurhcaseProduct();
    this.manageAllPurchaseButton();
    this.manageCoinReturn();
  }

  manageChargeToPurhcaseProduct() {
    $('#charge-button').addEventListener('click', e => {
      e.preventDefault();

      const charge = DOM.getCharge().toPurchaseProduct;
      if (!V.isValidCharge(charge)) return;

      UT.updateAddedCharge(charge);

      DOM.showChargeToPurchaseProduct();
    });
  }

  manageAllPurchaseButton() {
    UT.isExist(DB.load('inventory')) && getAllPurchaseButton();
  }

  manageCoinReturn() {
    $('#coin-return-button').addEventListener('click', e => {
      e.preventDefault();

      if (!V.isValidCoinReturn()) return;

      calculateReturnCoins();

      this.renderVendingMachineChargeManager();
    });
  }

  renderVendingMachineChargeManager() {
    DOM.showVendingMachineCharge(); //잔돈충전 - 보유 금액 갱신
    DOM.showVendingMachineCoins(); //잔돈충전 - 자판기가 보유한 동전 갱신
  }
}
