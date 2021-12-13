import {
  getMoneyCustomer,
  setMoneyCustomer,
} from "../../../utils/getSetItems.js";

const addMoneyCustomer = moneyStr => {
  const moneyBefore = getMoneyCustomer();

  if (moneyBefore) {
    const money = parseInt(moneyBefore, 10) + parseInt(moneyStr, 10);
    setMoneyCustomer(money);
  } else {
    setMoneyCustomer(moneyStr);
  }
};

export { addMoneyCustomer };
