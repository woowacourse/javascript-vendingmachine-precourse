import { SUBTITLE, LABEL, TEXT, PLACEHOLDER } from '../utils/constant.js';
import { Subtitle, Input, Button, P, Table, Th, Tr } from '../components/compoenents.js';

export default class PurchasePage {
  constructor(controller) {
    this.inputCoin = Input(PLACEHOLDER.INSERT_COIN);
    this.buttonInsert = Button(TEXT.INSERT);
    this.buttonReturn = Button(TEXT.RETURN);
    this.textCurrent = P(TEXT.INSERTED);
    this.tableCurrent = Table();
    this.tableReturn = Table();
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
}
