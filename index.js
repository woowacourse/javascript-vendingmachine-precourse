import App from './src/App.js';
import { APP_TITLE, APP_MENU } from './src/constants/index.js';

const initProps = {
  APP_TITLE,
  APP_MENU,
};

const app = new App('#app', initProps);
