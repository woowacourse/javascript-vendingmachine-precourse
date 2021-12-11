import { ELEMENT_ID, MENUS } from '../constants/index.js';
import LocalStorage from '../utils/localStorage.js';
import Button from './base/Button.js';
import Component from './base/Component.js';
import Label from './base/Label.js';
import Machine from './Machine.js';
import Tabs from './Tabs.js';

class App extends Component {
  $tabs;

  $title;

  $restartButton;

  $machine;

  constructor() {
    super(document.getElementById(ELEMENT_ID.APP));
    this.$tabs = new Tabs(MENUS.PRODUCT_MANAGE);
    this.$title = new Label('h2', '🥤자판기🥤');
    this.$restartButton = new Button('새로 시작');
    this.$machine = new Machine(MENUS.PRODUCT_MANAGE);
    this.setEvent();

    this.children = [
      this.$tabs,
      this.$title,
      this.$restartButton,
      this.$machine,
    ];
  }

  setEvent() {
    this.$tabs.onStateChanged = (newStateParams) => {
      if (!('currentTab' in newStateParams)) {
        return;
      }

      const { currentTab } = newStateParams;
      this.$machine.setState({ currentMenu: currentTab });
    };

    this.$restartButton.setOnClick(() => {
      LocalStorage.clear();
      window.location.reload();
    });
  }

  update() {
    this.$machine.update();
  }
}

export default App;
