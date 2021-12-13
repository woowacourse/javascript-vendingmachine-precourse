import { getMoneyCustomer } from "../../utils/getSetItems.js";

const showMoneyCustomer = () => {
  const $chargeAmountDiv = document.getElementById("charge-amount-div");
  const moneyCustomer = getMoneyCustomer();

  if (moneyCustomer) {
    $chargeAmountDiv.innerHTML = `
      투입한 금액:
      <span id="charge-amount">${moneyCustomer}</span>원
    `;
  } else {
    $chargeAmountDiv.innerHTML = "투입한 금액: ";
  }
};

export { showMoneyCustomer };
