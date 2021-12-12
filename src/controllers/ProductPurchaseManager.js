import { $, default as DOM } from '../views/DOMUtils.js';
import { default as V } from '../utils/validators.js';
import { default as DB } from '../model/database.js';
import { default as UT } from '../utils/utils.js';
import calculateReturnCoins from '../utils/calculateReturnCoins.js';

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
    $('#charge-button').addEventListener('click', e => {
      e.preventDefault();

      const charge = DOM.getCharge().toPurchaseProduct;
      if (!V.isValidCharge(charge)) return;

      UT.updateAddedCharge(charge);
    });

    UT.isExist(DB.load('inventory')) && DOM.getAllPurchaseButton();

    $('#coin-return-button').addEventListener('click', e => {
      e.preventDefault();

      if (!V.isValidCoinReturn()) return;

      calculateReturnCoins();
    });
  }
}
