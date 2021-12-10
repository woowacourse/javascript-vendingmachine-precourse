import Component from './core/Component.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { newElement } from './utils/dom.js';

export default class App extends Component {
  initChildren() {
    this.children = [
      new Header(newElement('<div id="header"/>')),
      new Main(newElement('<div id="main"/>')),
    ];
  }
}
