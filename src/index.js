import controller from './controllers/controller.js';
import initRender from './views/initRender.js';

export default function vendingMachine() {
  this.init = () => {
    initRender();
    controller();
  };
}

const vender = new vendingMachine();
vender.init();
