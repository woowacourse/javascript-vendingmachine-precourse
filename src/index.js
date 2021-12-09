import { $ } from './dom/dom.js';
import initRender from './views/initRender.js';

export default function vendingMachine() {
  this.userTotalMoney;
  this.drinkMenuObjectList = [];
  this.vendingCoinList = {
    coin500: 0,
    coin100: 0,
    coin50: 0,
    coin10: 0,
  };

  this.init = () => {
    initRender();
  };
}

const vender = new vendingMachine();
vender.init();
