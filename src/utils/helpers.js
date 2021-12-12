import Product from '../core/class/Product.js';
import { COIN_UNITS, DEFAULT_VALUES } from './constants.js';

export const generateRandomChanges = money => {
  const coins = DEFAULT_VALUES.COINS;
  let restMoney = money;
  while (restMoney > 0) {
    const unit = MissionUtils.Random.pickNumberInList(COIN_UNITS);
    if (restMoney - unit >= 0) {
      restMoney -= unit;
      coins[unit] += 1;
    }
  }
  return coins;
};

export const mergeCoins = (originCoins, newCoins) => {
  const mergedCoins = {};
  for (const [unit, quantity] of Object.entries(originCoins)) {
    mergedCoins[unit] = quantity + newCoins[unit];
  }
  return mergedCoins;
};

export const getChangesCoin = (change, coins) => {
  const changeCoins = DEFAULT_VALUES.COINS;
  const machineCoins = { ...coins };
  let restChange = change;
  let index = 0;

  while (restChange > 0 && index < COIN_UNITS.length) {
    const currentCoin = COIN_UNITS[index];
    if (machineCoins[currentCoin] === 0) index += 1;
    else if (restChange >= currentCoin) {
      changeCoins[currentCoin] += 1;
      machineCoins[currentCoin] -= 1;
      restChange -= currentCoin;
    }
  }
  return { changeCoins, machineCoins };
};

const deserializeToProductInstance = products =>
  products.map(data => new Product(data));

export const deserializeProductsData = data => {
  return data
    ? {
        products: deserializeToProductInstance(data.products),
      }
    : null;
};

export const filterPurchaseableProduct = (money, products) =>
  products.filter(item => {
    const { price, quantity } = item.getInformation();
    return price <= money && quantity > 0;
  });

export const hasDuplicatedProductName = (productName, products) =>
  products.find(product => {
    const { name } = product.getInformation();
    return name === productName;
  });
