import ProductPurcahseTemplate from './ProductPurchase/ProductPurchaseTemplate.js';
import VendingMachineManageTemplate from './VendingMachineManage/VendingMachineManageTemplate.js';
import ProductAddTemplate from './ProductAdd/ProductAddTemplate.js';

export default class VendingMachine {
  constructor() {
    this.app = document.getElementById('app');
    this.appHeader = document.createElement('header');
    this.app.append(this.appHeader);
    this.makeHeaderHTML();
    this.makeContentsHTML();
  }

  makeHeaderHTML() {
    this.appTitle = document.createElement('h1');
    this.appTab = document.createElement('ul');
    this.appTitle.innerText = '🥤자판기🥤';
    this.appTab.innerHTML = this.constructor.makeTabHTML();
    this.appHeader.append(this.appTitle, this.appTab);
    this.addEventToButton();
  }

  static makeTabHTML() {
    return '<li><button type="button" id="product-add-menu">상품 관리</button></li><li><button type="button" id="vending-machine-manage-menu">잔돈 충전</button></li><li><button type="button" id="product-purchase-menu">상품 구매</button></li>';
  }

  addEventToButton() {
    document.getElementById('product-add-menu').onclick =
      this.showProductAdd.bind(this);
    document.getElementById('vending-machine-manage-menu').onclick =
      this.showVendingMachineManage.bind(this);
    document.getElementById('product-purchase-menu').onclick =
      this.showProductPurchase.bind(this);
  }

  makeContentsHTML() {
    const productAdd = new ProductAddTemplate();
    const vendingMachineManage = new VendingMachineManageTemplate();
    const productPurchase = new ProductPurcahseTemplate();
    this.productAddScreen = productAdd.template();
    this.vendingMachineManageScreen = vendingMachineManage.template();
    this.productPurchaseScreen = productPurchase.template();
    this.hideAllScreen();
  }

  hideAllScreen() {
    this.productAddScreen.style.display = 'none';
    this.vendingMachineManageScreen.style.display = 'none';
    this.productPurchaseScreen.style.display = 'none';
  }

  showProductAdd(e) {
    e.preventDefault();
    this.hideAllScreen();
    this.productAddScreen.style.display = 'block';
  }

  showVendingMachineManage(e) {
    e.preventDefault();
    this.hideAllScreen();
    this.vendingMachineManageScreen.style.display = 'block';
  }

  showProductPurchase(e) {
    e.preventDefault();
    this.hideAllScreen();
    this.productPurchaseScreen.style.display = 'block';
  }
}

const vendingMachine = new VendingMachine();
