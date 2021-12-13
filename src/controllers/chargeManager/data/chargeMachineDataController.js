import { COIN_TYPES } from "../../../utils/constants.js";
import {
  getCoinsInMachine,
  setCoinsInMachine,
} from "../../../utils/getSetItems.js";

const availableRandomCoin = money => {
  let coin = money;

  do {
    coin = window.MissionUtils.Random.pickNumberInList(COIN_TYPES);
  } while (money - coin < 0);

  return coin;
};

const incQuantity = (coin, coinQuantity) => {
  for (let i = 0; i < COIN_TYPES.length; i++) {
    if (coin === COIN_TYPES[i]) {
      coinQuantity[i]++;
    }
  }

  return coinQuantity;
};

const makeMoneyToCoins = money => {
  let coinQuantity = [0, 0, 0, 0];

  while (money > 0) {
    const coin = availableRandomCoin(money);
    coinQuantity = incQuantity(coin, coinQuantity);
    money -= coin;
  }

  return coinQuantity;
};

const addCoinsInMachine = money => {
  const coins = getCoinsInMachine();
  const newCoinQuantity = makeMoneyToCoins(money);

  if (coins) {
    const coinQuantity = coins.split(",");
    for (let i = 0; i < coinQuantity.length; i++) {
      coinQuantity[i] = parseInt(coinQuantity[i], 10) + newCoinQuantity[i];
    }
    setCoinsInMachine(coinQuantity.join(","));
  } else {
    setCoinsInMachine(newCoinQuantity.join(","));
  }
};

export { addCoinsInMachine };
