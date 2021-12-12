import { COIN_500, COIN_100, COIN_50, COIN_10 } from '../constants/common.js';
import STORAGE_KEY from '../constants/key.js';

export const getReturnCoinQuantityStorageKey = coin => {
  if (coin === COIN_500) return STORAGE_KEY.return500CoinQuantity;
  if (coin === COIN_100) return STORAGE_KEY.return100CoinQuantity;
  if (coin === COIN_50) return STORAGE_KEY.return50CoinQuantity;
  if (coin === COIN_10) return STORAGE_KEY.return10CoinQuantity;
  return false;
};

export const getChargeCoinQuantityStroageKey = coin => {
  if (coin === COIN_500) return STORAGE_KEY.charge500Quantity;
  if (coin === COIN_100) return STORAGE_KEY.charge100Quantity;
  if (coin === COIN_50) return STORAGE_KEY.charge50Quantity;
  if (coin === COIN_10) return STORAGE_KEY.charge10Quantity;
  return false;
};
