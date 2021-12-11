import { $, default as DOM } from '../views/DOMUtils.js';
import { default as V } from '../utils/validators.js';
import { default as DB } from '../model/database.js';
import { default as UT } from '../utils/utils.js';

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

      if (!V.isValidCharge(DOM.getCharge().toPurchaseProduct)) return;

      DB.overwrite('chargeToPurchaseProduct', Number(DOM.getCharge().toPurchaseProduct));

      DOM.showChargeToPurchaseProduct();
    });

    UT.isExist(DB.load('inventory')) && DOM.addPurchaseButtonEvent();
  }
}
