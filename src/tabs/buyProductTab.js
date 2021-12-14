import BuyProductTabView from '../view/buyProductTabView.js';
import { getData, setData } from '../localStorage.js';
export default class BuyProductTab {
  constructor() {
    this.view = new BuyProductTabView();
  }

  init() {
    this.products = getData('products');
    this.view.render(this.products);
  }
}
