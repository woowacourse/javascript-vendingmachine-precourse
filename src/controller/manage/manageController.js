import { showError } from '../../utils/error.js';
import ManageView from '../../view/manage/manageView.js';
import { isValidChargeAmount } from '../../utils/validator.js';
import { COIN_UNIT } from '../../constants/constants.js';
import NUMBER from '../../constants/number.js';

export default class ManageController {
  constructor(appModel) {
    this.manageView = new ManageView();
    this.appModel = appModel;
  }

  init() {
    this.manageView.init();

    this.manageView.renderManageTab(this.appModel.chargeAmount);
    this.manageView.selectManageTabDOM();
    this.attachManageTabEvents();
  }

  attachManageTabEvents() {
    this.manageView.$manageForm.addEventListener('submit', this.handleCharge.bind(this));
  }

  handleCharge(e) {
    e.preventDefault();

    const chargeAmount = this.manageView.$chargeInput.value;

    if (isValidChargeAmount(chargeAmount)) {
      this.appModel.setChargeAmount(Number(chargeAmount));
      this.manageView.renderChargeAmount(this.appModel.chargeAmount);
      this.createRandomCoins(chargeAmount);
      this.appModel.setCoins();
      return this.manageView.renderCoins(this.appModel.coins);
    }

    return showError();
  }

  createRandomCoins(chargeAmount) {
    const randomUnit = MissionUtils.Random.pickNumberInList(COIN_UNIT);

    while (chargeAmount > 0) {
      if (chargeAmount >= randomUnit) {
        chargeAmount -= randomUnit;
        this.appModel.findCoin(randomUnit).accumulate(NUMBER.ONE);
      }
    }

    this.appModel.addAccumulatedCoinsAmounts();
  }
}
