import Component from './core/Component.js';
import Header from './components/Header.js';
import { newElement } from './utils/dom.js';

export default class App extends Component {
  initChildren() {
    this.children = [new Header(newElement('<div id="header"/>'))];
  }
}
