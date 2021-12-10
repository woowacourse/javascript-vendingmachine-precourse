import Button from './base/Button.js';
import Component from './base/Component.js';
import { ELEMENT_ID, MENUS } from '../constants/index.js';
import { mapObject } from '../utils/index.js';

const menuIdRecord = {
  [MENUS.PRODUCT_MANAGE]: ELEMENT_ID.MENU_PRODUCT_MANAGE,
  [MENUS.CHANGES_CHARGE]: ELEMENT_ID.MENU_CHARGE_MANAGE,
  [MENUS.PRODUCT_PURCHASE]: ELEMENT_ID.MENU_PRODUCT_PURCHASE,
};

class Tabs extends Component {
  $tabButtons;

  constructor(initTab) {
    super(document.createElement('div'));
    this.setState({ currentTab: initTab });

    this.$tabButtons = mapObject(menuIdRecord, ([menu, id]) => [
      menu,
      new Button(menu, { id }),
    ]);

    this.setEvent();
  }

  setEvent() {
    Object.entries(this.$tabButtons).forEach(([menu, $button]) => {
      $button.addOnClick(() => {
        this.setState({ currentTab: menu });
      });
    });
  }

  render() {
    this.renderChildrenView(Object.values(this.$tabButtons));
  }
}

export default Tabs;
