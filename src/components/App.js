import showMain from './showMain.js';
import MenuButtonController from './MenuButtonController.js';

export default class App {
  constructor() {
    this.main = showMain();
    MenuButtonController.menuButtonEvent();
  }
}
