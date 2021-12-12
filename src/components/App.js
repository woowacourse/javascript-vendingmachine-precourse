import showMain from './showMain.js';
import MenuButtonController from './MainMenu/MenuButtonController.js';
import PurchaseEvent from './PurchaseEvent.js';

export default class App {
  constructor() {
    showMain();
    MenuButtonController.menuButtonEvent();
    PurchaseEvent.addPurchaseEvent();
  }
}
