import { SUBTITLE, LABEL, MARGIN, TEXT, PLACEHOLDER, CLASS, ID } from '../utils/constant.js';
import { Subtitle, InputById, ButtonById, Table, Th, Tr, TdByClassName, TrByClassName, Theadbody } from '../components/compoenents.js';

export default class ManagePage {
  constructor(controller) {
    this.inputName = InputById(PLACEHOLDER.PRODUCT_NAME, ID.INPUT_PRODUCT_NAME);
    this.inputPrice = InputById(PLACEHOLDER.PRICE, ID.INPUT_PRODUCT_PRICE);
    this.inputQuantity = InputById(PLACEHOLDER.PRODUCT_QUANTITY, ID.INPUT_PRODUCT_QUANTITY);
    this.buttonAdd = ButtonById(TEXT.ADD, ID.BUTTON_ADD_PRODUCT);
    this.table = Table();
    this.tbody = Theadbody([]);
    this.controller = controller;
  }

  setUIText() {
    this.inputPrice.setAttribute('type', 'number');
    this.inputPrice.setAttribute('min', 100);
    this.inputPrice.setAttribute('step', 10);
  }

  setTable() {
    const tr = Tr([Th(LABEL.PRODUCT_NAME), Th(LABEL.PRICE), Th(LABEL.QUANTITY_PRODUCT)]);
    const thead = Theadbody([tr]);
    this.table.appendChild(thead);
  }

  setUI(page) {
    this.setUIText();
    this.setTable();
    this.inputPrice.style.margin = MARGIN;
    this.buttonAdd.style.margin = MARGIN;
    page.append(
      Subtitle(SUBTITLE.ADD_PRODUCT),
      this.inputName,
      this.inputPrice,
      this.inputQuantity,
      this.buttonAdd,
      Subtitle(SUBTITLE.CURRENT_PRODUCT),
      this.table,
    );
  }

  buttonHandler() {
    this.buttonAdd.addEventListener('click', e => {
      e.preventDefault();
      const name = this.inputName.value;
      const price = this.inputPrice.value;
      const quantity = this.inputQuantity.value;
      this.controller.addProduct(name, price, quantity);
    });
  }

  showProductListAll(products) {
    if (products.length > 0) {
      for (let i = 0; i < products.length; i += 1) {
        this.attachNewProduct(products[i]);
      }
    }
    this.table.appendChild(this.tbody);
  }

  cleantable() {
    this.tbody.remove();
    this.tbody = Theadbody([]);
  }

  attachNewProduct(product) {
    const productTr = TrByClassName(
      [
        TdByClassName(product.name, CLASS.PRODUCT_NAME),
        TdByClassName(product.price, CLASS.PRODUCT_PRICE),
        TdByClassName(product.quantity, CLASS.PRODUCT_QUANTITY),
      ],
      CLASS.PRODUCT_ITEM,
    );
    this.tbody.appendChild(productTr);
  }
}