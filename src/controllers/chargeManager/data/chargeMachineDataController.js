import { COIN_TYPES } from "../../../utils/constants.js";
import {
  getCoinsInMachine,
  setCoinsInMachine,
} from "../../../models/getSetItems.js";

// 동전을 랜덤으로 뽑아 가능하다면 반환
const availableRandomCoin = money => {
  let coin = money;

  do {
    coin = window.MissionUtils.Random.pickNumberInList(COIN_TYPES);
  } while (money - coin < 0);

  return coin;
};

// 동전 수 증가
const incQuantity = (coin, coinQuantity) => {
  for (let i = 0; i < COIN_TYPES.length; i++) {
    if (coin === COIN_TYPES[i]) {
      coinQuantity[i]++;
    }
  }

  return coinQuantity;
};

// 돈을 랜덤하게 동전으로 변환
const makeMoneyToCoins = money => {
  let coinQuantity = [0, 0, 0, 0];

  while (money > 0) {
    const coin = availableRandomCoin(money);
    coinQuantity = incQuantity(coin, coinQuantity);
    money -= coin;
  }

  return coinQuantity;
};

// 동전을 자판기에 저장
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
