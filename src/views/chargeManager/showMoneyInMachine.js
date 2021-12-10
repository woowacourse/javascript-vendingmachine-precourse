import { calculateMoney } from "../../utils/calculateMoney.js";

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
