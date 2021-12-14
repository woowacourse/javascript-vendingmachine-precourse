import ManageTabView from '../view/manageTabView.js';

export default class ManageTab {
  constructor() {
    this.view = new ManageTabView();
  }

  init() {
    this.view.render();
  }
}
