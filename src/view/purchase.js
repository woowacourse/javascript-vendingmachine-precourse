import { SUBTITLE, LABEL, TEXT, PLACEHOLDER, ID } from '../utils/constant.js';
import { Subtitle, InputById, PById, Table, Th, Tr, Theadbody, ButtonById } from '../components/compoenents.js';

export default class PurchasePage {
  constructor(controller) {
    this.inputCoin = InputById(PLACEHOLDER.INSERT_COIN,ID.INPUT_PURCHASE_COIN);
    this.buttonInsert = ButtonById(TEXT.INSERT, ID.BUTTON_PURCHASE_CHARGE);
    this.buttonReturn = ButtonById(TEXT.RETURN, ID.BUTTON_RETURN);
    this.textCurrent = PById(`${TEXT.INSERTED} ${localStorage.getItem('insertedMoney')}`,ID.TEXT_PURCHASE_COIN);
    this.tableCurrent = Table();
    this.tableReturn = Table();
    this.tbody = Theadbody([]);
    this.controller = controller;
  }

  setTableCurrent() {
    this.tableCurrent.appendChild(Tr([
      Th(LABEL.PRODUCT_NAME),
      Th(LABEL.PRICE),
      Th(LABEL.QUANTITY_PRODUCT),
      Th(LABEL.PURCHASE),
    ]));
  }

  setTableReturn() {
    this.tableReturn.appendChild(Tr([
      Th(LABEL.COIN),
      Th(LABEL.QUANTITY_COIN)
    ]));
  }
  
  setUI(page) {
    this.setTableCurrent();
    this.setTableReturn();
    page.append(
      Subtitle(SUBTITLE.INSERT_COIN),
      this.inputCoin,
      this.buttonInsert,
      this.textCurrent,
      Subtitle(SUBTITLE.ITEMLIST),
      this.tableCurrent,
      Subtitle(SUBTITLE.LEFT_COIN),
      this.tableReturn
    );
  }

  buttonHandler() {
    this.buttonInsert.addEventListener('click', (e) => {
      e.preventDefault();
      this.controller.insertMoney(this.inputCoin.value);
    })
  }

  showInsertedMoney(money) {
    this.textCurrent.innerText = `${TEXT.INSERTED} ${money}`;
  }

  showProductListAll(products) {
    if(products.length > 0) {
      for(let i = 0; i < products.length; i += 1) {
        this.attachProduct(products[i]);
      }
    }
    this.tableCurrent.appendChild(this.tbody);
  }

  cleantable() {
    this.tbody.remove();
    this.tbody = Theadbody([]);
  }

  attachProduct(product) {
    const productTr = TrByClassName([
      TdByClassName(product.name,CLASS.PRODUCT_NAME),
      TdByClassName(product.price,CLASS.PRODUCT_PRICE),
      TdByClassName(product.quantity,CLASS.PRODUCT_QUANTITY)
    ],CLASS.PRODUCT_ITEM);
    this.tableCurrent.appendChild(productTr);
  }
}
