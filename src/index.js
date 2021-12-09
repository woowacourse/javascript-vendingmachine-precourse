import App from './App.js';
import Store from './store/Store.js';

const store = new Store('vending-machine');

new App(document.querySelector('#app'), { store });
