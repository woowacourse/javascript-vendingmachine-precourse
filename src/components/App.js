import showMain from './showMain.js';
import MenuButtonController from './MenuButtonController.js';
import ProductPurchaseView from './ProductPurchaseView.js';
import PurchaseEvent from './PurchaseEvent.js';

export default class App {
  constructor() {
    showMain();
    MenuButtonController.menuButtonEvent();
    // ProductPurchaseView.addPurchaseEvent();
    PurchaseEvent.addPurchaseEvent();
  }
}
