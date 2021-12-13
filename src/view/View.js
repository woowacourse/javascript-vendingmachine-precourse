import { TAB_MENUS_TEXT } from '../utils/constants.js';

class View {
  constructor() {
    this.init();
  }

  init() {
    this.$app = document.getElementById('app');
  }

  showTabMenuScreen() {
    this.$app.insertAdjacentHTML('beforeend', TAB_MENUS_TEXT);
  }
}

export default View;
