import { $, default as DOM } from '../../utils/DOMUtils.js';
import { default as V } from '../../utils/validators.js';
import { default as DB } from '../../model/database.js';
import { default as UT } from '../../utils/utils.js';
import calculateReturnCoins from '../utils/calculateReturnCoins.js';
import getAllPurchaseButton from '../utils/getAllPurchaseButton.js';
import { SELECTOR } from '../../constants/selectors.js';
import { STORAGE } from '../../constants/constants.js';

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
    $(SELECTOR.PURCHASE_CHARGE_BUTTON).addEventListener('click', e => {
      e.preventDefault();

      const charge = DOM.getCharge().toPurchaseProduct;
      if (!V.isValidCharge(charge)) return;

      UT.updateAddedCharge(charge);

      DOM.showChargeToPurchaseProduct();
    });
  }

  manageAllPurchaseButton() {
    UT.isExist(DB.load(STORAGE.INVENTORY.NAME)) && getAllPurchaseButton();
  }

  manageCoinReturn() {
    $(SELECTOR.COIN_RETURN_BUTTON).addEventListener('click', e => {
      e.preventDefault();

      if (!V.isValidCoinReturn()) return;

      calculateReturnCoins();

      this.renderVendingMachineChargeManager();
    });
  }

  renderVendingMachineChargeManager() {
    DOM.showVendingMachineCharge();
    DOM.showVendingMachineCoins();
  }
}
