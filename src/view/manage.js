import { SUBTITLE, LABEL, MARGIN, TEXT, PLACEHOLDER, CLASS, ID } from '../utils/constant.js';

export default class ManagePage {
  constructor(page, inventory) {
    this.subtitleAdd = document.createElement('h3');
    this.subtitleCurrent = document.createElement('h3');
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
    this.inventory = inventory;
  }

  setUIText() {
    this.subtitleAdd.innerText = SUBTITLE.ADD_PRODUCT;
    this.subtitleCurrent.innerText = SUBTITLE.CURRENT_PRODUCT;
    this.inputName.setAttribute('placeholder', PLACEHOLDER.PRODUCT_NAME);
    this.inputPrice.setAttribute('placeholder', PLACEHOLDER.PRICE);
    this.inputQuantity.setAttribute('placeholder', PLACEHOLDER.PRODUCT_QUANTITY);
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

  buttonHandler() {
    this.buttonAdd.addEventListener('click', (e) => {
      e.preventDefault();
      const name = this.inputName.value;
      const price = this.inputPrice.value;
      const quantity = this.inputQuantity.value;
      this.inventory.saveItem(name, price, quantity);
      this.attachNewProduct(name, price, quantity);
      // localStorage.clear();
      console.log(localStorage);
    })
  }
  
  showProductListAll() {
    for(let i = 0; i < localStorage.length; i += 1) {
      const name = localStorage.key(i);
      const [price, quantity] = localStorage.getItem(localStorage.key(i)).split('-'); 
      this.attachNewProduct(name, price, quantity);
    }
  }

  attachNewProduct(name, price, quantity) {
    const productTr = document.createElement('tr');
    productTr.setAttribute('class', CLASS.PRODUCT_ITEM);
    const productNameTd = document.createElement('td');
    productNameTd.setAttribute('class', CLASS.PRODUCT_NAME);
    const productPriceTd = document.createElement('td');
    productPriceTd.setAttribute('class', CLASS.PRODUCT_PRICE);
    const prodcutQuantityTd = document.createElement('td');
    prodcutQuantityTd.setAttribute('class', CLASS.PRODUCT_QUANTITY);
    productNameTd.innerText = name;
    productPriceTd.innerText = price;
    prodcutQuantityTd.innerText = quantity;
    productTr.append(productNameTd, productPriceTd, prodcutQuantityTd);
    this.table.appendChild(productTr);
  }
}
