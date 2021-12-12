import { SUBTITLE, LABEL, MARGIN, TEXT, PLACEHOLDER, CLASS} from '../utils/constant.js';
import { $ } from '../utils/selector.js';

export default class ManagePage {
  constructor(controller) {
    this.subtitleAdd = document.createElement('h3');
    this.subtitleCurrent = document.createElement('h3');
    this.inputName = document.createElement('input');
    this.inputPrice = document.createElement('input');
    this.inputQuantity = document.createElement('input');
    this.buttonAdd = document.createElement('button');
    this.table = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');
    this.tr = document.createElement('tr');
    this.thName = document.createElement('th');
    this.thPrice = document.createElement('th');
    this.thQuantity = document.createElement('th');
    this.controller = controller;
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
    this.tr.append(this.thName, this.thPrice, this.thQuantity);
    this.thead.append(this.tr);
    this.table.appendChild(this.thead);
  }
  
  // index.html에 생성한 tab들 넣기
  setUI(page) {
    this.setUIText();
    this.setTable();
    this.inputPrice.style.margin = MARGIN;
    page.append(this.subtitleAdd,this.inputName,this.inputPrice,this.inputQuantity); 
    this.buttonAdd.style.margin = MARGIN;
    page.append(this.buttonAdd,this.subtitleCurrent,this.table);
  }

  buttonHandler() {
    this.buttonAdd.addEventListener('click', (e) => {
      e.preventDefault();
      const name = this.inputName.value;
      const price = this.inputPrice.value;
      const quantity = this.inputQuantity.value;
      this.controller.addProduct(name, price, quantity);
    })
  }
  
  showProductListAll(products) {
    if(products.length > 0) {
      for(let i = 0; i < products.length; i += 1) {
        this.attachNewProduct(products[i]);
      }
    }
    this.tbody.setAttribute('id','tbody');
    this.table.appendChild(this.tbody);
  }

  cleantable() {
    this.tbody.remove();
    this.tbody = document.createElement('tbody');
  }

  attachNewProduct(product) {
    const productTr = document.createElement('tr');
    productTr.setAttribute('class', CLASS.PRODUCT_ITEM);
    const productNameTd = document.createElement('td');
    productNameTd.setAttribute('class', CLASS.PRODUCT_NAME);
    const productPriceTd = document.createElement('td');
    productPriceTd.setAttribute('class', CLASS.PRODUCT_PRICE);
    const prodcutQuantityTd = document.createElement('td');
    prodcutQuantityTd.setAttribute('class', CLASS.PRODUCT_QUANTITY);
    productNameTd.innerText = product.name;
    productPriceTd.innerText = product.price;
    prodcutQuantityTd.innerText = product.quantity;
    productTr.append(productNameTd, productPriceTd, prodcutQuantityTd);
    this.tbody.appendChild(productTr);
  }
}
