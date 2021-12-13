import { default as DB } from '../../model/database.js';
import { default as UT } from '../../utils/utils.js';
import { default as DOM } from '../../utils/DOMUtils.js';
import { STORAGE, COIN_ARRAY } from '../../constants/constants.js';

const calculateReturnCoins = () => {
  const charge = DB.load(STORAGE.CHARGE.NAME);
  const wallet = DB.load(STORAGE.COIN.NAME);
  const emptyWallet = { coin500: 0, coin100: 0, coin50: 0, coin10: 0 };

  const [deductedWallet, returnCoinWallet] = useGreedyArgorithm(charge, wallet, emptyWallet);

  manageChargeToPurchaseProduct(returnCoinWallet, charge);

  manageReturnCoins(deductedWallet, returnCoinWallet);
};

const useGreedyArgorithm = (charge, wallet, emptyWallet) => {
  const tryCaseByCoinType = coinType => {
    while (charge >= coinType && wallet[STORAGE.COIN.NAME + coinType] > 0) {
      wallet[STORAGE.COIN.NAME + coinType] -= 1;
      emptyWallet[STORAGE.COIN.NAME + coinType] += 1;
      charge -= coinType;
    }
  };

  COIN_ARRAY.forEach(coinType => tryCaseByCoinType(coinType));

  return [wallet, emptyWallet];
};

const manageChargeToPurchaseProduct = (returnCoinWallet, charge) => {
  const sumCoins = UT.calculateToCharge(returnCoinWallet);
  DB.overwrite(STORAGE.CHARGE.NAME, charge - sumCoins);

  DOM.showChargeToPurchaseProduct();
};

const manageReturnCoins = (deductedWallet, returnCoinWallet) => {
  DB.overwrite(STORAGE.COIN.NAME, deductedWallet);

  DOM.showReturnCoins(returnCoinWallet);
};

export default calculateReturnCoins;
