import { COIN_TYPES } from "../../utils/constants.js";

const calculateMoney = () => {
  const coinsInMachine = JSON.parse(localStorage.getItem("coins"));
  let result = 0;

  if (coinsInMachine) {
    const coinsQuantity = coinsInMachine.split(",");

    for (let i = 0; i < COIN_TYPES.length; i++) {
      result += parseInt(coinsQuantity[i], 10) * COIN_TYPES[i];
    }
  }

  return result;
};

const showMoneyInMachine = () => {
  const money = calculateMoney();

  if (money !== 0) {
    const $chargeAmount = document.getElementById(
      "vending-machine-charge-amount",
    );
    $chargeAmount.innerHTML = `${money}원`;
  }
};

export { showMoneyInMachine };
