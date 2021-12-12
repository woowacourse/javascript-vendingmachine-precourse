import { SUBTITLE, LABEL, MARGIN, TEXT, PLACEHOLDER, CLASS} from '../utils/constant.js';

export default class ManagePage {
  constructor(inventory) {
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
    this.inventory = inventory;
  }

  setUIText() {
    this.subtitleAdd.innerText = SUBTITLE.ADD_PRODUCT;
    this.subtitleCurrent.innerText = SUBTITLE.CURRENT_PRODUCT;
    this.inputName.setAttribute('placeholder', PLACEHOLDER.PRODUCT_NAME);
    this.inputPrice.setAttribute('placeholder', PLACEHOLDER.PRICE);
    this.inputPrice.setAttribute('type', 'number');
    this.inputPrice.setAttribute('min',100);
    this.inputPrice.setAttribute('step',10);
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
  setUI(page) {
    this.setUIText();
    this.setTable();
    this.inputPrice.style.margin = MARGIN;
    page.appendChild(this.subtitleAdd);
    page.appendChild(this.inputName);
    page.appendChild(this.inputPrice);
    page.appendChild(this.inputQuantity); 
    this.buttonAdd.style.margin = MARGIN;
    page.appendChild(this.buttonAdd);
    page.appendChild(this.subtitleCurrent);
    page.appendChild(this.table);
  }

  buttonHandler(inventory) {
    this.buttonAdd.addEventListener('click', (e) => {
      e.preventDefault();
      const name = this.inputName.value;
      const price = this.inputPrice.value;
      const quantity = this.inputQuantity.value;
      inventory.saveItem(name, price, quantity);
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
