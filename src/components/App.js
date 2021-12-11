import showMain from './showMain.js';
import MenuButtonController from './MenuButtonController.js';
import { COINS, FIVE_HUNDRED, ONE_HUNDRED, FIFTY, TEN, USER_COINS } from '../utils/constants.js';
import ProductPurchaseView from './ProductPurchaseView.js';

export default class App {
  constructor() {
    this.main = showMain();
    MenuButtonController.menuButtonEvent();

    //이벤트는 여기에?
    ProductPurchaseView.addPurchaseEvent();
  }
}
