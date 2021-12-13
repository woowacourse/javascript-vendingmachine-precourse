import ManageView from '../../view/manage/manageView.js';

export default class ManageController {
  constructor() {
    this.manageView = new ManageView();
  }

  init() {
    this.manageView.init();

    this.manageView.renderManageTab();
  }
}
