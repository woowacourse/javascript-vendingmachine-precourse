import { Container } from './components/elements.js';
import Header from './components/header.js';

export default function VendingMachine(app) {
  this.header = Header();
  this.menuViewContainer = Container('menu-view');

  this.render = () => {
    app.append(this.header, this.menuViewContainer);
  };
}

const vendingMachine = new VendingMachine(document.querySelector('#app'));
vendingMachine.render();
