import { ID } from '../../../constant/attributes.js';
import { MENU } from '../../../constant/text.js';
import { createElement } from '../../../utils/dom-utils.js';

export default class MenuComponents {
  constructor($element, setTab) {
    this.$root = $element;
    this.create();
    this.addChildren();
    this.bindEvents();
    this.setTab = setTab;
  }

  create() {
    this.$container = createElement('div', false, ID.MENU.CONTAINER);
    this.$title = createElement('h1', MENU.TITLE);
    this.$buttonContainer = createElement('div');
    this.$buttonMenuManageProduct = createElement('button', MENU.PRODUCT_MANAGE, ID.MENU.ADD);
    this.$buttonMenuManagaeChange = createElement('button', MENU.CHARGE_CHANGE, ID.MENU.CHANGE);
    this.$buttonMenuPurchase = createElement('button', MENU.PURCHASE_PRODUCT, ID.MENU.PURCHASE);
  }

  addChildren() {
    this.$buttonContainer.append(
      this.$buttonMenuManageProduct,
      this.$buttonMenuManagaeChange,
      this.$buttonMenuPurchase
    );
    this.$container.append(this.$title, this.$buttonContainer);
    this.$root.append(this.$container);
  }

  bindEvents() {
    this.$buttonContainer.addEventListener('click', this.tabChoice.bind(this));
  }

  tabChoice(e) {
    if (e.target.id !== '') {
      this.setTab(e.target.id);
    }
  }
}
