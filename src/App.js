import Component from './core/Component.js';
import Router from './core/Router.js';
import NavBar from './components/NavBar/NavBar.js';
import ProductAddMenu from './components/ProductAddMenu/ProductAddMenu.js';
import ProductPurchaseMenu from './components/ProductPurchaseMenu/ProductPurchaseMenu.js';
import VendingMachineManageMenu from './components/VendingMachineMenu/VendingMachineManageMenu.js';

import Items from './models/Items.js';
import Coins from './models/Coins.js';
import ChargedAmount from './models/ChargedAmount.js';
import $ from './helpers.js';

export default class App extends Component {
  setup() {
    const { store } = this.props;
    const { items, coins, chargedAmount } = store.getLocalStorage();

    this.state = {
      currentTab: '/add',
      items: new Items(store, items),
      coins: new Coins(store, coins),
      chargedAmount: new ChargedAmount(store, chargedAmount),
    };

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
    const { navigate, addItem, refill, charge, purchase } = this;
    const { currentTab, items, coins, chargedAmount } = this.state;

    new NavBar($('#nav-bar'), { navigate: navigate.bind(this) });
    new Router($('#router'), currentTab);
    new ProductAddMenu($('#product-add-tab'), {
      items,
      addItem: addItem.bind(this),
    });
    new VendingMachineManageMenu($('#vending-machine-manage-tab'), {
      coins,
      refill: refill.bind(this),
    });
    new ProductPurchaseMenu($('#product-purchase-tab'), {
      items,
      coins,
      chargedAmount,
      charge: charge.bind(this),
      purchase: purchase.bind(this),
    });
  }

  navigate(to) {
    this.setState({ currentTab: to });
  }

  addItem(name, price, quantity) {
    const { items } = this.state;

    this.setState({ items: items.insert(name, price, quantity) });
  }

  refill(amount) {
    const { coins } = this.state;

    this.setState({ coins: coins.refill(amount) });
  }

  charge(amount) {
    const { chargedAmount } = this.state;

    this.setState({ chargedAmount: chargedAmount.charge(amount) });
  }

  purchase(id, price) {
    const { chargedAmount, items } = this.state;

    this.setState({
      chargedAmount: chargedAmount.purchase(price),
      items: items.purchase(id),
    });
  }
}
