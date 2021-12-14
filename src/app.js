import Component from './essential/component.js';
import Header from './components/header.js';

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
        break;
      case 1:
        break;
      case 2:
        break;
    }
  }

  selectMenu(currMenu) {
    this.setState({ currMenu });
  }
}
