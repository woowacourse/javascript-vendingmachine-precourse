import { $ } from '../utils/selector.js';
import { TAB, TITLE } from '../utils/constant.js';
import { Title, ButtonById, Div } from '../components/compoenents.js';
import ManagePage from './manage.js';
import ChargePage from './charge.js';
import PurchasePage from './purchase.js';


export default class View {
  constructor(controller) {
    this.app = $('#app');
    this.manageTab = ButtonById(TAB.TEXT_PRODUCT_MANAGE, TAB.ID_PRODUCT_MANAGE);
    this.chargeTab = ButtonById(TAB.TEXT_CHARGE, TAB.ID_CHARGE);
    this.purchaseTab =ButtonById(TAB.TEXT_PURCHASE, TAB.ID_PURCHASE);
    this.managePageDiv = Div();
    this.chargePageDiv =  Div();
    this.purchasePageDiv =  Div();
    this.managePage = new ManagePage(controller);
    this.chargePage = new ChargePage(controller);
    this.purchasePage = new PurchasePage(controller);
  }

  setAllPage() {
    // this.app.appendChild(this.managePageDiv);
    // this.app.appendChild(this.chargePageDiv);
    this.app.appendChild(this.purchasePageDiv);
  }

  setBasicUI(products) {
    this.app.append(
      Title(TITLE),
      this.manageTab,
      this.chargeTab,
      this.purchaseTab,
    )
    this.initPages(products);
    this.setAllPage();
  }

  initPages(products) {
    this.getManagePage(products);
    this.getChargePage();
    this.getPurchasePage();
  }

  getManagePage(products) {
    this.managePage.setUI(this.managePageDiv);
    this.managePage.showProductListAll(products);
    this.managePage.buttonHandler();
  }

  getChargePage() {
    this.chargePage.setUI(this.chargePageDiv);
    this.chargePage.buttonHandler();
  }

  getPurchasePage() {
    this.purchasePage.setUI(this.purchasePageDiv);
    this.purchasePage.buttonHandler();
  }

  hideAllPage() {
    this.managePage.style.display = 'none';
    this.chargePage.style.display = 'none';
    this.purchasePage.style.display = 'node';
  }

  showSelectedPage(id) {
    $(`#${id}`).style.display = 'block';
  }
}
