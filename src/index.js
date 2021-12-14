import App from './components/App.js';
import Store from './store/Store.js';
import { STORAGE_NAME } from './configs/constants.js';

const store = new Store(STORAGE_NAME);

new App(document.querySelector('#app'), { store });
