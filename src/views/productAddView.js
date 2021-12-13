import { ELEMENT_IDS } from '../constants.js';
import { htmlToElement } from '../utils.js';
import { productAddTabPaneTemplate, productManageItemTemplate } from '../templates.js';
import TabPaneView from '../abstracts/tabPaneView.js';

class ProductAddView extends TabPaneView {
  constructor() {
    super(ELEMENT_IDS.PRODUCT_ADD_PANE);
    this.mount(htmlToElement(productAddTabPaneTemplate));
    this.bindingElements();
    this.renderProductItems();
  }

  bindingElements() {
    const { PRODUCT_NAME_INPUT, PRODUCT_PRICE_INPUT, PRODUCT_QUANTITY_INPUT, PRODUCT_ADD_BUTTON } =
      ELEMENT_IDS;
    this.$nameInput = document.querySelector(`#${PRODUCT_NAME_INPUT}`);
    this.$priceInput = document.querySelector(`#${PRODUCT_PRICE_INPUT}`);
    this.$quantityInput = document.querySelector(`#${PRODUCT_QUANTITY_INPUT}`);
    this.$addButton = document.querySelector(`#${PRODUCT_ADD_BUTTON}`);
  }

  renderProductItems() {
    const { productItems } = this.model;
    const $tableBody = document.querySelector(`#${ELEMENT_IDS.PRODUCT_ADD_PANE} table tbody`);
    $tableBody.replaceChildren();
    productItems.forEach((item) => {
      const $row = htmlToElement(productManageItemTemplate(item));
      $tableBody.appendChild($row);
    });
  }

  notify() {
    this.renderProductItems();
  }
}

export default ProductAddView;
