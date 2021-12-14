import { ELEMENT_HIDE, ELEMENT_SHOW } from "./utils/constants.js";
import { tabButtonTemplete } from "./utils/dom/tabButtonTemplete.js";
import ChargeAddView from "./views/ChargeAddView.js";
import ProductControlView from "./views/ProductControlView.js";
import ProductPurchaseView from "./views/ProductPurchaseView.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.renderTabButton();
    this.productControlView = new ProductControlView($app);
    this.chargeAddView = new ChargeAddView($app);
    this.productPurchaseView = new ProductPurchaseView($app);
    this.$tabButtonWrap = document.querySelector('#product-menu');
    this.gameStart();
    this.tabButtonEvent();
  }

  renderTabButton() {
    this.$app.innerHTML = (tabButtonTemplete());
  }

  gameStart() {
    [...this.$app.childNodes].map(conponent => conponent.style = ELEMENT_HIDE);
    this.$tabButtonWrap.style = ELEMENT_SHOW;
    this.productControlView.renderProductControl();
  }

  tabButtonEvent() {
    this.$tabButtonWrap.addEventListener('click', ({ target }) => {
      [...this.$app.childNodes].map(conponent => conponent.style = ELEMENT_HIDE)
      this.$tabButtonWrap.style = ELEMENT_SHOW;
      if (target.id === "product-add-menu") {
        this.productControlView.renderProductControl();
      } else if (target.id === "vending-machine-manage-menu") {
        this.chargeAddView.renderChargeAdd();
      } else if (target.id === "product-purchase-menu") {
        this.productPurchaseView.renderPorductPurchase();
      }
    })
  }

}