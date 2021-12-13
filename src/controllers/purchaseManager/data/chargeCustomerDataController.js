import {
  getMoneyCustomer,
  setMoneyCustomer,
} from "../../../utils/getSetItems.js";

// 금액 투입 시 기존 금액에 누적하여 저장. 기존 금액이 없다면 새로 저장.
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
