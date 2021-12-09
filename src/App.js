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
    const { items, change } = this.props.store.getLocalStorage();

    this.state = {
      currentTab: '/add',
      items: items.map(
        ({ name, price, quantity }) => new Item(name, price, quantity)
      ),
      change,
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
    const { navigate, addItem, addChange } = this;
    new NavBar($('#nav-bar'), { navigate: navigate.bind(this) });
    new Router($('#router'), this.state.currentTab);
    new ProductAddMenu($('#product-add-tab'), {
      items: this.state.items,
      addItem: addItem.bind(this),
    });
    new VendingMachineManageMenu($('#vending-machine-manage-tab'), {
      change: this.state.change,
      addChange: addChange.bind(this),
    });
    new ProductPurchaseMenu($('#product-purchase-tab'));
  }

  navigate(to) {
    this.setState({ currentTab: to });
  }

  addItem(item) {
    this.props.store.insert('items', item, () => {
      console.log(`inserted: ${item.toString()}`);
    });
    this.setState({ items: [...this.state.items, item] });

    return [...this.state.items, item];
  }

  addChange(additionalChange) {
    const { change } = this.state;
    const newChange = {
      '500': change['500'] + additionalChange['500'],
      '100': change['100'] + additionalChange['100'],
      '50': change['50'] + additionalChange['50'],
      '10': change['10'] + additionalChange['10'],
    };

    this.props.store.updateChange(newChange);
    this.setState({ change: newChange });

    return newChange;
  }
}
