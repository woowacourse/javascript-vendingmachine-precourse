import showMain from './showMain.js';
import MenuButtonController from './MenuButtonController.js';
import PurchaseEvent from './PurchaseEvent.js';

export default class App {
  constructor() {
    showMain();
    MenuButtonController.menuButtonEvent();
    PurchaseEvent.addPurchaseEvent();
  }
}
