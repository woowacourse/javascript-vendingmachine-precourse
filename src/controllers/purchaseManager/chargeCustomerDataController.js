const addMoneyCustomer = moneyStr => {
  const moneyBefore = JSON.parse(localStorage.getItem("money"));

  if (moneyBefore) {
    const money = parseInt(moneyBefore, 10) + parseInt(moneyStr, 10);
    localStorage.setItem("money", JSON.stringify(money));
  } else {
    localStorage.setItem("money", JSON.stringify(parseInt(moneyStr, 10)));
  }
};

export { addMoneyCustomer };
