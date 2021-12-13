import { COIN_LIST, COIN_KEY_LIST } from '../constants/coinConstants.js';

function getLimitCoinCount(userMoney, coinCount, coin) {
  const limit = parseInt(Number(userMoney) / Number(coin));
  if (Number(userMoney) === 0) {
    return 0;
  }
  if (coinCount >= limit) {
    return limit;
  } else {
    return coinCount;
  }
}

export default function getGridCoinCount(userMoney, vendingStorageData) {
  let returnCoinObject = {};
  COIN_KEY_LIST.forEach((item, index) => {
    returnCoinObject[item] = getLimitCoinCount(
      userMoney,
      vendingStorageData[item],
      COIN_LIST[index]
    );
    userMoney -= Number(returnCoinObject[item]) * Number(COIN_LIST[index]);
  });
  return returnCoinObject;
}
