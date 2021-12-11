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

    // 이러면 새로고침 하면 다 날아감
    const coins = JSON.parse(localStorage.getItem(COINS));
    // localStorage.setItem(COINS, JSON.stringify({ [FIVE_HUNDRED]: 0, [ONE_HUNDRED]: 0, [FIFTY]: 0, [TEN]: 0}));
    localStorage.setItem(USER_COINS, JSON.stringify({ [FIVE_HUNDRED]: 0, [ONE_HUNDRED]: 0, [FIFTY]: 0, [TEN]: 0}));
  }
}
