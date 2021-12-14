import { COIN_TYPES } from "../../../utils/constants.js";
import { insertQuantityOfCoins } from "../../../views/purchaseManager/show/showReturnCoins.js";
import { removeItemFromLocalStorage } from "../../../models/itemFromLocalStorage.js";
import {
  getCoinsInMachine,
  setCoinsInMachine,
  setMoneyCustomer,
} from "../../../models/getSetItems.js";

// 자판기 안에 있는 모든 동전 반환
const returnAllCoinsInMachine = (coins, moneyInMachine, money) => {
  setMoneyCustomer(money - moneyInMachine);
  removeItemFromLocalStorage("coins");
  insertQuantityOfCoins(coins);
};

// 각 동전마다 반환할 수 있는 개수를 셈
const countOfCoinType = (coinType, coinQuantity, money) => {
  const count = money / coinType;
  let quantity = 0;

  if (count <= coinQuantity) {
    money -= coinType * count;
    quantity = count;
  } else {
    money -= coinType * coinQuantity;
    quantity = coinQuantity;
  }

  return { quantity: quantity, money: money };
};

// 반환될 동전의 최소 개수를 세어 반환
// 자판기 내의 돈이 반환할 돈보다 많을 경우 실행됨
const returnMinCountOfCoins = (coinsInMachine, money) => {
  const returnCoins = [];

  for (let i = 0; i < COIN_TYPES.length; i++) {
    // eslint-disable-next-line prettier/prettier
    const resultOfThisStep = countOfCoinType(COIN_TYPES[i], coinsInMachine[i], money);
    money = resultOfThisStep.money;
    returnCoins.push(resultOfThisStep.quantity);
    coinsInMachine[i] -= resultOfThisStep.quantity;
  }

  setMoneyCustomer(money);
  setCoinsInMachine(coinsInMachine.join(","));
  insertQuantityOfCoins(returnCoins);
};

// 잔돈 반환
const returnCoins = (money, moneyInMachine) => {
  const strOfCoinsInMachine = getCoinsInMachine();

  if (strOfCoinsInMachine) {
    const coinsInMachine = strOfCoinsInMachine.split(",");

    if (moneyInMachine <= money) {
      returnAllCoinsInMachine(coinsInMachine, moneyInMachine, money);
    } else {
      returnMinCountOfCoins(coinsInMachine, money);
    }
  }
};

export { returnCoins };
