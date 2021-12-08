import showMenu from './showMenu.js';
import showTitle from './showTitle.js';

export default class App {
  constructor() {
    this.title = showTitle();
    this.menu = showMenu();
  }
}
