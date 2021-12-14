import { default as DB } from '../../model/database.js';
import { default as UT } from '../../utils/utils.js';
import { default as DOM } from '../../utils/DOMUtils.js';
import { STORAGE, COIN_ARRAY } from '../../constants/constants.js';

const calculateReturnCoins = () => {
  const charge = DB.load(STORAGE.CHARGE.NAME);
  const wallet = DB.load(STORAGE.COIN.NAME);
  const emptyWallet = { ...STORAGE.COIN.INIT };

  const [deductedWallet, returnCoinWallet] = useGreedyArgorithm(charge, wallet, emptyWallet);

  manageChargeToPurchaseProduct(returnCoinWallet, charge);

  manageReturnCoins(deductedWallet, returnCoinWallet);
};

const useGreedyArgorithm = (charge, wallet, emptyWallet) => {
  const data = { charge, wallet, emptyWallet };

  COIN_ARRAY.forEach(coinType => tryCaseByCoinType(coinType, data));

  return [data.wallet, data.emptyWallet];
};

const tryCaseByCoinType = (coinType, data) => {
  while (isChargeBiggerThanCoin(data, coinType) && isAvailable(data, coinType)) {
    data.wallet[STORAGE.COIN.NAME + coinType] -= 1;

    data.emptyWallet[STORAGE.COIN.NAME + coinType] += 1;

    data.charge -= coinType;
  }
};

const isChargeBiggerThanCoin = (data, coinType) => {
  return data.charge >= coinType;
};

const isAvailable = (data, coinType) => {
  return data.wallet[STORAGE.COIN.NAME + coinType] > 0;
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
