import App from './components/App.js';
import VendingMachineStore from './store/vendingMachineStore.js';

const main = () => {
  const app = new App();
  app.render();

  VendingMachineStore.instance.notifyAll();
};

main();
