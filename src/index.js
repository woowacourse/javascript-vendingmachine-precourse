import App from './App.js';
import { ID } from './constant/selector.js';

const app = new App(document.querySelector(`#${ID.APP}`));
app.init();
