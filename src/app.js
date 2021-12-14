import Component from './essential/component.js';
import Header from './components/header.js';
import ProductAdd from './components/product-add/index.js';
import VendingMachineManage from './components/vending-machine-manage/index.js';

const CONTENT = `
  <header></header>
  <main></main>
`;

export default class App extends Component {
  setup() {
    this.$state = {
      currMenu: 0,
    };
  }

  template() {
    return CONTENT;
  }

  mounted() {
    new Header(this.$('header'), {
      selectMenu: this.selectMenu.bind(this),
    });

    this.mountMain();
  }

  mountMain() {
    const $main = this.$('main');

    switch (this.$state.currMenu) {
      case 0:
        new ProductAdd($main);
        break;
      case 1:
        new VendingMachineManage($main);
        break;
      case 2:
        break;
    }
  }

  selectMenu(currMenu) {
    this.setState({ currMenu });
  }
}
