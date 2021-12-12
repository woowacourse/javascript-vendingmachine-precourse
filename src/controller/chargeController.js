import ChargeModel from '../model/chargeModel.js';
import ChargeView from '../view/chargeView.js';
import { CHARGE_ELEMENT_ID } from '../constants/constants.js';

export default class ChargeController {
  static init() {
    ChargeView.render();
    const chargeObject = new ChargeModel();
    ChargeView.updateTotalCharge(chargeObject);
    ChargeView.updateCoinList(chargeObject);
    this.bindEventListener(chargeObject);
  }

  static bindEventListener(chargeObject) {
    document
      .querySelector(`#${CHARGE_ELEMENT_ID.chargeButton}`)
      .addEventListener('click', () => {
        if (chargeObject.isValidChargeInput()) {
          chargeObject.randomCharge();
          ChargeView.updateTotalCharge(chargeObject);
          ChargeView.updateCoinList(chargeObject);
          chargeObject.resetChargeInput();
        }
      });
  }
}
