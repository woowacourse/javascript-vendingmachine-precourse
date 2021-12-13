import { showError } from '../../utils/error.js';
import ManageView from '../../view/manage/manageView.js';
import { isValidChargeAmount } from '../../utils/validator.js';

export default class ManageController {
  constructor(appModel) {
    this.manageView = new ManageView();
    this.appModel = appModel;
  }

  init() {
    this.manageView.init();

    this.manageView.renderManageTab();
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
      return this.appModel.setChargeAmount(Number(chargeAmount));
    }

    return showError();
  }
}
