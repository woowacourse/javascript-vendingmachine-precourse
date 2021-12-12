import { default as DB } from '../model/database.js';
import { default as UT } from './utils.js';
import { default as DOM } from '../views/DOMUtils.js';

const calculateReturnCoins = () => {
  const charge = DB.load('chargeToPurchaseProduct');
  const wallet = DB.load('vendingMachineCoins');
  const sumCoins = UT.calculateToCharge('vendingMachineCoins');
  const newWallet = { coin500: 0, coin100: 0, coin50: 0, coin10: 0 };

  //   if (charge >= sumCoins) {
  //     DB.overwrite('chargeToPurchaseProduct', charge - sumCoins);

  //     DOM.showChargeToPurchaseProduct();
  //     DOM.showReturnCoins();

  //     return DB.overwrite('vendingMachineCoins', newWallet);
  //   }
  useGreedyArgorithm(charge, wallet, newWallet);
};

const useGreedyArgorithm = (charge, wallet, newWallet) => {
  const tryCaseByCoinType = coinType => {
    while (charge >= coinType && wallet['coin' + coinType] > 0) {
      wallet['coin' + coinType] -= 1;
      newWallet['coin' + coinType] += 1;
      charge -= coinType;
    }
  };

  [500, 100, 50, 10].forEach(coinType => tryCaseByCoinType(coinType));

  console.log(wallet);
  console.log(newWallet);
};

export default calculateReturnCoins;
