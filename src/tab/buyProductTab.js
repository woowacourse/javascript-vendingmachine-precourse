import BuyProductTabView from '../view/buyProductTabView.js';

export default class BuyProductTab {
  constructor() {
    this.view = new BuyProductTabView();
  }

  init() {
    this.view.render();
  }
}
