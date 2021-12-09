import { COIN_TYPES } from "../../utils/constants.js";
import { insertQuantityOfCoins } from "../../views/purchaseManager/showReturnCoins.js";

const calculateMoney = coins => {
  let money = 0;

  for (let i = 0; i < coins.length; i++) {
    money += COIN_TYPES[i] * coins[i];
  }

  return money;
};

// 자판기 안에 있는 모든 동전 반환
const returnAllCoinsInMachine = (coins, moneyInMachine, money) => {
  localStorage.setItem("money", JSON.stringify(money - moneyInMachine));
  localStorage.removeItem("coins");
  insertQuantityOfCoins(coins);
};

const countOfCoinType = (coinType, coinQuantity, money) => {
  const count = money / coinType;
  let quantity = 0;
  if (count <= coinQuantity) {
    money -= coinType * count;
    quantity = count;
    coinQuantity -= count;
  } else {
    money -= coinType * coinQuantity;
    quantity = coinQuantity;
    coinQuantity = 0;
  }

  return { coinQuantity: coinQuantity, quantity: quantity, money: money };
};

const returnMinCountOfCoins = (coinsInMachine, money) => {
  const returnCoins = [];

  for (let i = 0; i < COIN_TYPES.length; i++) {
    const resultOfThisStep = countOfCoinType(COIN_TYPES[i], coinsInMachine[i], money);
    money = resultOfThisStep.money;
    returnCoins.push(resultOfThisStep.quantity);
    coinsInMachine[i] = resultOfThisStep.coinQuantity;
  }

  localStorage.setItem("money", JSON.stringify(money));
  localStorage.setItem("coins", JSON.stringify(coinsInMachine.join(",")));
  insertQuantityOfCoins(returnCoins);
};

const returnCoins = money => {
  const strOfCoinsInMachine = JSON.parse(localStorage.getItem("coins"));

  if (strOfCoinsInMachine) {
    const coinsInMachine = strOfCoinsInMachine.split(",");
    const moneyInMachine = calculateMoney(coinsInMachine);
    if (moneyInMachine <= money) {
      returnAllCoinsInMachine(coinsInMachine, moneyInMachine, money);
    } else {
      returnMinCountOfCoins(coinsInMachine, money);
    }
  }
};

export { returnCoins };
