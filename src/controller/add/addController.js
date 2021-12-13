import AddView from '../../view/add/addView.js';

export default class AddController {
  constructor() {
    this.addView = new AddView();
  }

  init() {
    this.addView.init();
    this.addView.renderAddTab();
  }
}
