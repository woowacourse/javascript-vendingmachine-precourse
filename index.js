import App from './src/App.js';
import { APP_MENU, APP_TITLE } from './src/constants/index.js';

const APP_INFO = {
  title: APP_TITLE,
  menu: APP_MENU,
};

const app = new App('#app', APP_INFO);
