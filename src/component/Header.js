import { TAG, DOM_TITLE, DOM_ATTRIBUTE, SELECTOR, EVENT } from '../constant/dom.js';

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
    this.$headerText.innerText = DOM_TITLE.HEADER_TITLE;

    return this.$headerText;
  }

  templateMenuButtons() {
    this.$menus = document.createElement(TAG.TAG_DIV);

    this.appendButton(SELECTOR.ID_PRODUCT_ADD_MENU, DOM_TITLE.PRODUCT_ADD_MENU_TITLE);
    this.appendButton(SELECTOR.ID_MACHINE_MANAGE_MENU, DOM_TITLE.MACHINE_MANAGE_MENU_TITLE);
    this.appendButton(SELECTOR.ID_PURCHASE_MENU, DOM_TITLE.PURCHASE_MENU_TITLE);

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
