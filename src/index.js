import { $ } from './utils/dom.js';
import { ID } from './constants/selector.js';
import App from './app.js';

const vendingMachine = new App($(`#${ID.APP}`));
vendingMachine.render();
