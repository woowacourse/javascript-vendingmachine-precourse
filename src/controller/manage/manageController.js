import { showError } from '../../utils/error.js';
import ManageView from '../../view/manage/manageView.js';
import { isValidChargeAmount } from '../../utils/validator.js';
import { COIN_UNIT, NUMBER } from '../../constants/constants.js';

export default class ManageController {
  constructor(appModel) {
    this.manageView = new ManageView();
    this.appModel = appModel;
  }

  init() {
    this.manageView.init();

    this.manageView.renderManageTab(
      this.appModel.getTotalCoinValue(),
      this.appModel.getCoinsAmountArray(),
      this.appModel.manageTabInput
    );
    this.manageView.selectManageTabDOM();
    this.attachManageTabEvents();
  }

  attachManageTabEvents() {
    this.manageView.$manageForm.addEventListener('submit', this.handleCharge.bind(this));
    this.manageView.$chargeInput.addEventListener('input', this.handleInputChange.bind(this));
  }

  handleCharge(e) {
    e.preventDefault();

    const chargeAmount = this.manageView.$chargeInput.value;

    if (isValidChargeAmount(chargeAmount)) {
      this.createRandomCoins(chargeAmount);
      this.manageView.renderChargeAmount(this.appModel.getTotalCoinValue());
      this.appModel.setCoins(this.appModel.coins);
      return this.manageView.renderCoins(this.appModel.coins);
    }

    return showError();
  }

  createRandomCoins(chargeAmount) {
    while (chargeAmount > 0) {
      const randomUnit = MissionUtils.Random.pickNumberInList(COIN_UNIT);
      if (chargeAmount >= randomUnit) {
        chargeAmount -= randomUnit;
        this.appModel.findCoin(randomUnit).accumulate(NUMBER.ONE);
      }
    }

    this.appModel.addAccumulatedCoinsAmounts();
  }

  handleInputChange(e) {
    const chargeAmount = e.target.value;

    this.appModel.setManageTabInput(chargeAmount);
  }
}
