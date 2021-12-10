import {
  getItemFromLocalStorage,
  setItemFromLocalStorage,
} from "../../utils/itemFromLocalStorage.js";

const addMoneyCustomer = moneyStr => {
  const moneyBefore = getItemFromLocalStorage("money");

  if (moneyBefore) {
    const money = parseInt(moneyBefore, 10) + parseInt(moneyStr, 10);
    setItemFromLocalStorage("money", money);
  } else {
    setItemFromLocalStorage("money", moneyStr);
  }
};

export { addMoneyCustomer };
