import Product from '../core/class/Product.js';
import { COIN_UNITS } from './constants.js';
import { convertArrayToObjectKeys } from './general.js';

export const createRandomChanges = money => {
  const coins = convertArrayToObjectKeys(COIN_UNITS);
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

export const filterPurchaseableProduct = (money, products) =>
  products.filter(item => {
    const { price, quantity } = item.getInformation();
    return price <= money && quantity > 0;
  });

export const getChangesCoin = (change, coins) => {
  const changeCoins = convertArrayToObjectKeys(COIN_UNITS);
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

export const hasDuplicatedProductName = (productName, products) =>
  products.find(product => {
    const { name } = product.getInformation();
    return name === productName;
  });

const serializeToProductInstance = products =>
  products.map(data => new Product(data));

export const serializeProductsData = data => {
  return data
    ? {
        products: serializeToProductInstance(data.products),
      }
    : null;
};
