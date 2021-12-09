import Component from './core/Component.js';
import Router from './core/Router.js';
import NavBar from './components/NavBar/NavBar.js';
import ProductAddMenu from './components/ProductAddMenu/ProductAddMenu.js';
import ProductPurchaseMenu from './components/ProductPurchaseMenu/ProductPurchaseMenu.js';
import VendingMachineManageMenu from './components/VendingMachineMenu/VendingMachineManageMenu.js';

export default class App extends Component {
  setup() {
    this.state = { currentTab: '/add' };
  }

  template() {
    return `
      <h1>🥤자판기🥤</h1>
      <nav id='nav-bar'></nav>
      <div id='router'>
        <div id='product-add-tab' data-path='/add'></div>
        <div id='product-purchase-tab' data-path='/purchase'></div>
        <div id='vending-machine-manage-tab' data-path='/manage'></div>
      </div>
    `;
  }

  mounted() {
    const { navigate } = this;

    new NavBar(document.querySelector('#nav-bar'), {
      navigate: navigate.bind(this),
    });
    new Router(document.querySelector('#router'), this.state.currentTab);
    new ProductAddMenu(document.querySelector('#product-add-tab'));
    new ProductPurchaseMenu(document.querySelector('#product-purchase-tab'));
    new VendingMachineManageMenu(
      document.querySelector('#vending-machine-manage-tab')
    );
  }

  navigate(to) {
    this.setState({ currentTab: to });
  }
}
