import Component from './core/Component.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { MENU } from './utils/constants.js';
import { newElement } from './utils/dom.js';

export default class App extends Component {
  initState() {
    this.state = { selectedMenu: MENU.PRODUCT_PURCHASE };
  }

  onChangeMenu(menu) {
    this.setState({ selectedMenu: menu });
  }

  initChildren() {
    this.children = [
      new Header(newElement('<div id="header"/>'), {
        onChangeMenu: menu => this.onChangeMenu(menu),
      }),
      new Main(newElement('<div id="main"/>'), {
        selectedMenu: this.state.selectedMenu,
      }),
    ];
  }
}
