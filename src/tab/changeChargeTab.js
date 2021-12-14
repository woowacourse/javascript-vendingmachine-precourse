import ChangeChargeTabView from '../view/changeChargeTabView.js';

export default class ChangeChargeTab {
  constructor() {
    this.view = new ChangeChargeTabView();
  }

  init() {
    this.view.render();
  }
}
