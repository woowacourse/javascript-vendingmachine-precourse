import Component from './core/Component.js';
import Router from './core/Router.js';
import NavBar from './components/NavBar/NavBar.js';
import ProductAddMenu from './components/ProductAddMenu/ProductAddMenu.js';
import ProductPurchaseMenu from './components/ProductPurchaseMenu/ProductPurchaseMenu.js';
import VendingMachineManageMenu from './components/VendingMachineMenu/VendingMachineManageMenu.js';

import Item from './components/common/Item.js';
import $ from './helpers.js';

export default class App extends Component {
  setup() {
    const { items, coins, chargeAmount } = this.props.store.getLocalStorage();

    this.state = {
      currentTab: '/add',
      items: items.map(
        ({ id, name, price, quantity }) => new Item(name, price, quantity, id)
      ),
      coins,
      chargeAmount,
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
    const { navigate, addItem, refillCoins, charge, purchase } = this;
    new NavBar($('#nav-bar'), { navigate: navigate.bind(this) });
    new Router($('#router'), this.state.currentTab);
    new ProductAddMenu($('#product-add-tab'), {
      items: this.state.items,
      addItem: addItem.bind(this),
    });
    new VendingMachineManageMenu($('#vending-machine-manage-tab'), {
      coins: this.state.coins,
      refillCoins: refillCoins.bind(this),
    });
    new ProductPurchaseMenu($('#product-purchase-tab'), {
      items: this.state.items,
      coins: this.state.coins,
      chargeAmount: this.state.chargeAmount,
      charge: charge.bind(this),
      purchase: purchase.bind(this),
    });
  }

  navigate(to) {
    this.setState({ currentTab: to });
  }

  addItem(item) {
    this.props.store.insert(item);
    this.setState({ items: [...this.state.items, item] });

    return [...this.state.items, item];
  }

  refillCoins(newCoins) {
    const { coins } = this.state;
    const sum = {
      '500': coins['500'] + newCoins['500'],
      '100': coins['100'] + newCoins['100'],
      '50': coins['50'] + newCoins['50'],
      '10': coins['10'] + newCoins['10'],
    };

    this.props.store.updateCoins(sum);
    this.setState({ coins: sum });

    return sum;
  }

  charge(amount) {
    this.props.store.updateCharge(this.state.chargeAmount + amount);
  }

  purchase(id) {
    const result = this.state.items.findIndex((item) => item.id === Number(id));

    if (result === -1) {
      console.log('error');

      return;
    }

    this.props.store.update(this.state.items[result]);
  }
}
