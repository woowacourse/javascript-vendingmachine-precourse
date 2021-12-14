import { TAG, DOM_ATTRIBUTE, EVENT } from '../constant/dom.js';
import { ID } from '../constant/selector.js';
import { TITLE } from '../constant/text.js';

export default class Header {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.$headerText = null;
    this.$menus = null;

    this.render();
    this.setEvent();
  }

  render() {
    this.$target.appendChild(this.templateHeaderText());
    this.$target.appendChild(this.templateMenuButtons());
  }

  templateHeaderText() {
    this.$headerText = document.createElement(TAG.TAG_H2);
    this.$headerText.innerText = TITLE.HEADER;

    return this.$headerText;
  }

  templateMenuButtons() {
    this.$menus = document.createElement(TAG.TAG_DIV);

    this.appendButton(ID.PRODUCT_ADD_MENU, TITLE.PRODUCT_ADD_MENU);
    this.appendButton(ID.MACHINE_MANAGE_MENU, TITLE.MACHINE_MANAGE_MENU);
    this.appendButton(ID.PURCHASE_MENU, TITLE.PURCHASE_MENU);

    return this.$menus;
  }

  appendButton(targetId, targetText) {
    const $menuButton = document.createElement(TAG.TAG_BUTTON);
    $menuButton.setAttribute(DOM_ATTRIBUTE.ID, targetId);
    $menuButton.innerText = targetText;

    this.$menus.appendChild($menuButton);
  }

  setEvent() {
    const { changeFocusedTab } = this.props;

    this.$menus.addEventListener(EVENT.CLICK, (e) => {
      changeFocusedTab(e.target.id);
    });
  }
}
