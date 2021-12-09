const showMoneyCustomer = () => {
  const $chargeAmountDiv = document.getElementById("charge-amount-div");
  const moneyCustomer = JSON.parse(localStorage.getItem("money"));

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
