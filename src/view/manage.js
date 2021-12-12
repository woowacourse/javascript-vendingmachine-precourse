import { SUBTITLE, LABEL, MARGIN, TEXT } from '../utils/constant.js';

export default class ManagePage {
  constructor(page) {
    this.subtitleAdd = document.createElement('h2');
    this.subtitleCurrent = document.createElement('h2');
    this.inputName = document.createElement('input');
    this.inputPrice = document.createElement('input');
    this.inputQuantity = document.createElement('input');
    this.buttonAdd = document.createElement('button');
    this.table = document.createElement('table');
    this.tr = document.createElement('tr');
    this.thName = document.createElement('th');
    this.thPrice = document.createElement('th');
    this.thQuantity = document.createElement('th');
    this.td = document.createElement('td');
    this.page = page;
  }

  setUIText() {
    this.subtitleAdd.innerText = SUBTITLE.ADD_PRODUCT;
    this.subtitleCurrent.innerText = SUBTITLE.CURRENT_PRODUCT;
    this.inputName.setAttribute('placeholder', LABEL.PRODUCT_NAME);
    this.inputPrice.setAttribute('placeholder', LABEL.PRICE);
    this.inputQuantity.setAttribute('placeholder', LABEL.QUANTITY_PRODUCT);
    this.buttonAdd.innerText = TEXT.ADD;
  }

  setTable() {
    this.thName.innerText = LABEL.PRODUCT_NAME;
    this.thPrice.innerText = LABEL.PRICE;
    this.thQuantity.innerText = LABEL.QUANTITY_PRODUCT;
    this.tr.appendChild(this.thName);
    this.tr.appendChild(this.thPrice);
    this.tr.appendChild(this.thQuantity);
    this.table.appendChild(this.tr);
  }

  
  // index.html에 생성한 tab들 넣기
  setUI() {
    this.setUIText();
    this.setTable();
    this.inputPrice.style.margin = MARGIN;
    this.page.appendChild(this.subtitleAdd);
    this.page.appendChild(this.inputName);
    this.page.appendChild(this.inputPrice);
    this.page.appendChild(this.inputQuantity); 
    this.buttonAdd.style.margin = MARGIN;
    this.page.appendChild(this.buttonAdd);
    this.page.appendChild(this.subtitleCurrent);
    this.page.appendChild(this.table);
  }
}
