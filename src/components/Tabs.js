import Button from './base/Button.js';
import Component from './base/Component.js';
import { ELEMENT_ID, MENUS } from '../constants/index.js';
import { $tag, mapObject } from '../utils/index.js';

const menuIdRecord = {
  [MENUS.PRODUCT_MANAGE]: ELEMENT_ID.MENU_PRODUCT_MANAGE,
  [MENUS.CHANGES_CHARGE]: ELEMENT_ID.MENU_CHARGE_MANAGE,
  [MENUS.PRODUCT_PURCHASE]: ELEMENT_ID.MENU_PRODUCT_PURCHASE,
};

class Tabs extends Component {
  $tabButtons;

  constructor(initTab) {
    super($tag('div'));
    this.setState({ currentTab: initTab });

    this.$tabButtons = mapObject(menuIdRecord, ([menu, id]) => [
      menu,
      new Button(menu, { id }),
    ]);

    this.setEvent();
    this.children = Object.values(this.$tabButtons);
  }

  setEvent() {
    Object.entries(this.$tabButtons).forEach(([menu, $button]) => {
      $button.setOnClick(() => {
        this.setState({ currentTab: menu });
      });
    });
  }
}

export default Tabs;
