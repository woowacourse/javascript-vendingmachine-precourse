import { default as DB } from '../model/database.js';
import { default as UT } from './utils.js';
import { default as DOM } from '../views/DOMUtils.js';

const calculateReturnCoins = () => {
  const charge = DB.load('chargeToPurchaseProduct');
  const coins = DB.load('vendingMachineCoins');
  const sumCoins = UT.calculateToCharge('vendingMachineCoins');

  if (charge > sumCoins) {
    DB.overwrite('chargeToPurchaseProduct', charge - sumCoins);

    DOM.showChargeToPurchaseProduct();
    DOM.showReturnCoins();

    DB.overwrite('vendingMachineCoins', { coin500: 0, coin100: 0, coin50: 0, coin10: 0 });
  }
};

export default calculateReturnCoins;
