import { COIN_TYPES } from "../../utils/constants.js";

const availableRandomCoin = money => {
  let coin = money;

  do {
    coin = window.MissionUtils.Random.pickNumberInList(COIN_TYPES);
  } while (money - coin < 0);

  return coin;
};

const makeMoneyToCoins = money => {
  const coinQuantity = [0, 0, 0, 0];
  while (money > 0) {
    const coin = availableRandomCoin(money);
    for (let i = 0; i < COIN_TYPES.length; i++) {
      if (coin === COIN_TYPES[i]) {
        coinQuantity[i]++;
        break;
      }
    }
    money -= coin;
  }

  return coinQuantity;
};

const addCoinsInMachine = money => {
  const coins = JSON.parse(localStorage.getItem("coins"));
  const newCoinQuantity = makeMoneyToCoins(money);

  if (coins) {
    const coinQuantity = coins.split(",");
    for (let i = 0; i < coinQuantity.length; i++) {
      coinQuantity[i] = parseInt(coinQuantity[i], 10) + newCoinQuantity[i];
    }
    localStorage.setItem("coins", JSON.stringify(coinQuantity.join(",")));
  } else {
    localStorage.setItem("coins", JSON.stringify(newCoinQuantity.join(",")));
  }
};

export { addCoinsInMachine };
