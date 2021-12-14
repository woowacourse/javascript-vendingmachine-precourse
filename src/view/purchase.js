import { SUBTITLE, LABEL, TEXT, PLACEHOLDER, ID, DATASET, CLASS} from '../utils/constant.js';
import { 
  Subtitle,
  InputById,
  PById,
  Table,
  Th,
  Tr,
  TrByClassName,
  Theadbody,
  ButtonById,
  TdById,
  Td,
  TdByClassNameAndDataset,
  TdButtonClassName
} from '../components/compoenents.js';
import { $ } from '../utils/selector.js';

export default class PurchasePage {
  constructor(controller) {
    this.inputCoin = InputById(PLACEHOLDER.INSERT_COIN,ID.INPUT_PURCHASE_COIN);
    this.buttonInsert = ButtonById(TEXT.INSERT, ID.BUTTON_PURCHASE_CHARGE);
    this.buttonReturn = ButtonById(TEXT.RETURN, ID.BUTTON_RETURN);
    this.textCurrent = PById(`${TEXT.INSERTED} ${localStorage.getItem('insertedMoney')}`,ID.TEXT_PURCHASE_COIN);
    this.tableCurrent = Table();
    this.tableReturn = Table();
    this.tbody = Theadbody([]);
    this.tdFirstQuantity = TdById('',ID.TABLE_RETURN_10);
    this.tdSecondQuantity = TdById('',ID.TABLE_RETURN_50);
    this.tdThirdQuantity = TdById('',ID.TABLE_RETURN_100);
    this.tdForthQuantity = TdById('',ID.TABLE_RETURN_500);
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
    this.tableReturn.append(
      Tr([Th(LABEL.COIN), Th(LABEL.QUANTITY_COIN)]),
      Tr([Td(LABEL.COIN10), this.tdFirstQuantity]),
      Tr([Td(LABEL.COIN50), this.tdSecondQuantity]),
      Tr([Td(LABEL.COIN100), this.tdThirdQuantity]),
      Tr([Td(LABEL.COIN500), this.tdForthQuantity]),
    );
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
      this.buttonReturn,
      this.tableReturn
    );
  }

  insertButtonHandler() {
    this.buttonInsert.addEventListener('click', (e) => {
      e.preventDefault();
      this.controller.insertMoney(this.inputCoin.value);
    })
  }

  returnButtonHandler() {
    this.buttonReturn.addEventListener('click', (e) => {
      e.preventDefault();
      this.controller.returnMoney(localStorage.getItem('insertedMoney'));
    })
  }

  showInsertedMoney(money) {
    this.textCurrent.innerText = `${TEXT.INSERTED} ${money}`;
  }

  showProductListAll(products) {
    this.cleantable();
    if(products.length > 0) {
      for(let i = 0; i < products.length; i += 1) {
        this.attachProduct(products[i]);
      }
      this.tableCurrent.appendChild(this.tbody);
    }
  }

  cleantable() {
    this.tbody.remove();
    this.tbody = Theadbody([]);
  }

  attachProduct(product) {
    const productTr = TrByClassName([
      TdByClassNameAndDataset(product.name,CLASS.PURCHASE_NAME, DATASET.PRODUCT_NAME),
      TdByClassNameAndDataset(product.price,CLASS.PURCHASE_PRICE, DATASET.PRODUCT_PRICE),
      TdByClassNameAndDataset(product.quantity,CLASS.PURCHASE_QUANTITY, DATASET.PRODUCT_QUANTITY),
      TdButtonClassName(CLASS.PURCHASE_BUTTON, product.name, this.controller)
    ],CLASS.PURCHASE_ITEM);
    this.tbody.appendChild(productTr);
  }

  showReturnCoins(returnCoins) {
    [ this.tdFirstQuantity.innerText,
      this.tdSecondQuantity.innerText,
      this.tdThirdQuantity.innerText,
      this.tdForthQuantity.innerText] = returnCoins;
  }
}
