import { ELEMENT_ID, MENUS } from '../constants/index.js';
import { $tag } from '../utils/index.js';
import Component from './base/Component.js';
import TextComponent from './base/TextComponent.js';
import Machine from './Machine.js';
import Tabs from './Tabs.js';

class App extends Component {
  $tabs;

  $title;

  $machine;

  constructor() {
    super(document.getElementById(ELEMENT_ID.APP));
    this.$tabs = new Tabs(MENUS.PRODUCT_MANAGE);
    this.$title = new TextComponent($tag('h2'), '🥤자판기🥤');
    this.$machine = new Machine(MENUS.PRODUCT_MANAGE);
    this.setEvent();
  }

  setEvent() {
    this.$tabs.onStateChanged = (newStateParams) => {
      if (!('currentTab' in newStateParams)) {
        return;
      }

      const { currentTab } = newStateParams;
      this.$machine.setState({ currentMenu: currentTab });
    };
  }

  render() {
    this.renderChildrenView([this.$tabs, this.$title, this.$machine]);
  }

  update() {
    this.$machine.update();
  }
}

export default App;
