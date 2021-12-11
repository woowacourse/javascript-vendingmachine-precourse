import Component from './core/Component.js';
import Router from './core/Router.js';
import NavBar from './components/NavBar/NavBar.js';
import ProductAddMenu from './components/ProductAddMenu/ProductAddMenu.js';
import ProductPurchaseMenu from './components/ProductPurchaseMenu/ProductPurchaseMenu.js';
import VendingMachineManageMenu from './components/VendingMachineMenu/VendingMachineManageMenu.js';

import VendingMachine from './models/VendingMachine.js';
import $ from './helpers.js';

export default class App extends Component {
  setup() {
    const { store } = this.props;
    const { items, coins, chargedAmount } = store.getLocalStorage();
    const currentTab = '/add';
    const vendingMachine = new VendingMachine(store, {
      items,
      coins,
      chargedAmount,
    });

    this.state = { currentTab, vendingMachine };

    console.log('data loaded', this.state);
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
    const { navigate, addItem, refill, charge, purchase, returnChange } = this;
    const { currentTab, vendingMachine } = this.state;

    new NavBar($('#nav-bar'), { navigate: navigate.bind(this) });
    new Router($('#router'), currentTab);
    new ProductAddMenu($('#product-add-tab'), {
      items: vendingMachine.items,
      addItem: addItem.bind(this),
    });
    new VendingMachineManageMenu($('#vending-machine-manage-tab'), {
      coins: vendingMachine.coins,
      refill: refill.bind(this),
    });
    new ProductPurchaseMenu($('#product-purchase-tab'), {
      items: vendingMachine.items,
      coins: vendingMachine.coins,
      chargedAmount: vendingMachine.chargedAmount,
      returnedCoins: vendingMachine.returnedCoins,
      charge: charge.bind(this),
      purchase: purchase.bind(this),
      returnChange: returnChange.bind(this),
    });
  }

  navigate(to) {
    this.setState({ currentTab: to });
  }

  addItem(name, price, quantity) {
    const { vendingMachine } = this.state;

    this.setState({
      vendingMachine: vendingMachine.addItem(name, price, quantity),
    });
  }

  refill(amount) {
    const { vendingMachine } = this.state;

    this.setState({ vendingMachine: vendingMachine.refillCoins(amount) });
  }

  charge(amount) {
    const { vendingMachine } = this.state;

    this.setState({ vendingMachine: vendingMachine.charge(amount) });
  }

  purchase(id) {
    const { vendingMachine } = this.state;

    this.setState({ vendingMachine: vendingMachine.purchase(id) });
  }

  returnChange() {
    const { vendingMachine } = this.state;

    this.setState({ vendingMachine: vendingMachine.returnChange() });
  }
}
