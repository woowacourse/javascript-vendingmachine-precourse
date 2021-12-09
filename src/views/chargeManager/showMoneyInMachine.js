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
  const $chargeAmountDiv = document.getElementById("machine-charge-amount-div");

  if (money !== 0) {
    $chargeAmountDiv.innerHTML = `
      보유 금액: 
      <span id="vending-machine-charge-amount">${money}</span>원
    `;
  } else {
    $chargeAmountDiv.innerHTML = "보유 금액: ";
  }
};

export { showMoneyInMachine };
