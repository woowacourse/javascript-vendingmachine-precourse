import { SUBTITLE, LABEL, MARGIN, TEXT, PLACEHOLDER } from '../utils/constant.js';

export default class PurchasePage {
  constructor(controller) {
    this.subtitleInsert = document.createElement('h3');
    this.subtitleItemList = document.createElement('h3');
    this.subtitleLeft = document.createElement('h3');
    this.inputCoin = document.createElement('input');
    this.buttonInsert = document.createElement('button');
    this.buttonReturn = document.createElement('button');
    this.textCurrent = document.createElement('p');
    this.showCurrent = document.createElement('p');
    this.tableCurrent = document.createElement('table');
    this.tableReturn = document.createElement('table');
    this.trCurrent = document.createElement('tr');
    this.trReturn = document.createElement('tr');
    this.thName = document.createElement('th');
    this.thPrice = document.createElement('th');
    this.thQuantityProduct = document.createElement('th');
    this.thQuantityCoin = document.createElement('th');
    this.thCoin = document.createElement('th');
    this.thPurchase = document.createElement('th');
    this.td = document.createElement('td');
    this.controller = controller;
  }

  setUIText() {
    this.subtitleInsert.innerText = SUBTITLE.INSERT_COIN;
    this.subtitleItemList.innerText = SUBTITLE.ITEMLIST;
    this.subtitleLeft.innerText = SUBTITLE.LEFT_COIN;
    this.inputCoin.setAttribute('placeholder', PLACEHOLDER.INSERT_COIN);
    this.buttonInsert.innerText = TEXT.INSERT;
    this.buttonReturn.innerText = TEXT.RETURN;
    this.textCurrent.innerText = TEXT.INSERTED;
  }

  setTableCurrent() {
    this.thName.innerText = LABEL.PRODUCT_NAME;
    this.thPrice.innerText = LABEL.PRICE;
    this.thQuantityProduct.innerText = LABEL.QUANTITY_PRODUCT;
    this.thPurchase.innerText = LABEL.PURCHASE;
    this.trCurrent.appendChild(this.thName)
    this.trCurrent.appendChild(this.thPrice);
    this.trCurrent.appendChild(this.thQuantityProduct);
    this.trCurrent.appendChild(this.thPurchase);
    this.tableCurrent.appendChild(this.trCurrent);
  }

  setTableReturn() {
    this.thCoin.innerText = LABEL.COIN;
    this.thQuantityCoin.innerText = LABEL.QUANTITY_COIN;
    this.trReturn.appendChild(this.thCoin);
    this.trReturn.appendChild(this.thQuantityCoin);
    this.tableReturn.appendChild(this.trReturn);
  }
  
  // index.html에 생성한 tab들 넣기
  setUI(page) {
    this.setUIText();
    this.setTableCurrent();
    this.setTableReturn();
    this.buttonInsert.style.margin = MARGIN;
    page.appendChild(this.subtitleInsert);
    page.appendChild(this.inputCoin);
    page.appendChild(this.buttonInsert);
    page.appendChild(this.textCurrent);
    page.appendChild(this.showCurrent);
    page.appendChild(this.subtitleItemList);
    page.appendChild(this.tableCurrent);
    page.appendChild(this.subtitleLeft);
    page.appendChild(this.tableReturn);
  }
}
