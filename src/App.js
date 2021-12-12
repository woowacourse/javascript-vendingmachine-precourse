import ChargeContainer from './components/Containers/ChargeContainer.js';
import ProductManageContainer from './components/Containers/ProductManageContainer.js';
import PurchaseContainer from './components/Containers/PurchaseContainer.js';
import Component from './components/core/Component.js';
import Menu from './components/Menu.js';
import {ID} from './utils/constants.js';

export default class App extends Component {
  init() {}

  template() {
    return `
      <div id=${ID.MENU_COTAINER}></div>
      <main id=${ID.MAIN_CONTAINER}></main>
    `;
  }

  mounted() {
    this.mountMenuComponent();
  }

  mountMenuComponent() {
    const menuContainer = document.querySelector('#menu-container');
    new Menu(menuContainer, {
      onClickProductManageTab: this.productManageTabClickHandler.bind(this),
      onClickChargeTab: this.chargeTabClickHandler.bind(this),
      onClickPuchaseTab: this.purchaseClickHandler.bind(this)
    });
  }

  showProductManageTabContainer() {
    const mainContainer = document.querySelector('#main-container');
    new ProductManageContainer(mainContainer);
  }

  productManageTabClickHandler() {
    this.showProductManageTabContainer();
  }

  showChargeTabContainer() {
    const mainContainer = document.querySelector('#main-container');
    new ChargeContainer(mainContainer);
  }

  chargeTabClickHandler() {
    this.showChargeTabContainer();
  }

  showPurchaseContainer() {
    const mainContainer = document.querySelector('#main-container');
    new PurchaseContainer(mainContainer);
  }

  purchaseClickHandler() {
    this.showPurchaseContainer();
  }
}
