import initRender from './views/initRender.js';

export default function vendingMachine() {
  this.init = () => {
    initRender();
  };
}

const vender = new vendingMachine();
vender.init();
