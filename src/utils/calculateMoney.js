import { COIN_TYPES } from "./constants.js";
import { getCoinsInMachine } from "../models/getSetItems.js";

// 자판기 속 동전을 세어 총 얼마가 있는지 반환
const calculateMoney = () => {
  const coinInMachine = getCoinsInMachine();
  let money = 0;

  if (coinInMachine) {
    const coinQuantity = coinInMachine.split(",");

    for (let i = 0; i < COIN_TYPES.length; i++) {
      money += parseInt(coinQuantity[i], 10) * COIN_TYPES[i];
    }
  }

  return money;
};

export { calculateMoney };
