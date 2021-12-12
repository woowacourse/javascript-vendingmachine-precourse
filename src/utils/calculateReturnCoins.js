import { default as DB } from '../model/database.js';
import { default as UT } from './utils.js';
import { default as DOM } from '../views/DOMUtils.js';

const calculateReturnCoins = () => {
  const charge = DB.load('chargeToPurchaseProduct');
  const wallet = DB.load('vendingMachineCoins');
  const emptyWallet = { coin500: 0, coin100: 0, coin50: 0, coin10: 0 };

  //   if (charge >= sumCoins) {
  //     DB.overwrite('chargeToPurchaseProduct', charge - sumCoins);

  //     DOM.showChargeToPurchaseProduct();
  //     DOM.showReturnCoins();

  //     return DB.overwrite('vendingMachineCoins', emptyWallet);
  //   }
  const [DeductedWallet, returnCoinWallet] = useGreedyArgorithm(charge, wallet, emptyWallet);

  console.log(DeductedWallet);
  console.log(returnCoinWallet);

  const sumCoins = UT.calculateToCharge(returnCoinWallet);
  DB.overwrite('chargeToPurchaseProduct', charge - sumCoins);
  DOM.showChargeToPurchaseProduct();

  DB.overwrite('vendingMachineCoins', DeductedWallet);
  DOM.showReturnCoins(returnCoinWallet);
};

const useGreedyArgorithm = (charge, wallet, emptyWallet) => {
  const tryCaseByCoinType = coinType => {
    while (charge >= coinType && wallet['coin' + coinType] > 0) {
      wallet['coin' + coinType] -= 1;
      emptyWallet['coin' + coinType] += 1;
      charge -= coinType;
    }
  };

  [500, 100, 50, 10].forEach(coinType => tryCaseByCoinType(coinType));

  return [wallet, emptyWallet];
};

export default calculateReturnCoins;
