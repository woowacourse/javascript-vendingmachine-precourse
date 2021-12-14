export function getDOMObj(query) {
  return document.querySelector(query);
}

export function getReturnCoins(amount, currentCoins) {
  const newCoins = { ...currentCoins };
  let left = amount;
  const returnCoins = Object.fromEntries(
    Object.keys(newCoins)
      .sort((a, b) => b - a)
      .map((coin) => {
        const toReturn = Math.min(Math.floor(left / coin), newCoins[coin]);
        left -= coin * toReturn;
        newCoins[coin] -= toReturn;
        return [coin, toReturn];
      }),
  );

  return { returnCoins, left, newCoins };
}

export function noChange(obj) {
  return Object.values(obj).reduce((acc, val) => acc + val, 0) === 0;
}

export const divideToCoins = function divideAmountIntoRandomCoins(amount) {
  let left = amount;
  const coinObj = {};

  while (left !== 0) {
    const randomCoin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]); // eslint-disable-line
    if (randomCoin <= left) {
      coinObj[randomCoin] = coinObj[randomCoin] + 1 || 1;
      left -= randomCoin;
    }
  }

  return coinObj;
};

export const mergeObj = function deepMergeObjects(obj1, obj2) {
  const resultObj = Object.keys(obj2).reduce(
    (obj, key) => {
      const newObj = { ...obj };
      newObj[key] = (newObj[key] || 0) + obj2[key];
      return newObj;
    },
    { ...obj1 },
  );

  return resultObj;
};
