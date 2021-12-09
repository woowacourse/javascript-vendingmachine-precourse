const showMoneyCustomer = () => {
  const $chargeAmount = document.getElementById("charge-amount");
  const moneyCustomer = JSON.parse(localStorage.getItem("money"));

  if (moneyCustomer) {
    $chargeAmount.innerHTML = `${moneyCustomer}원`;
  }
};

export { showMoneyCustomer };
