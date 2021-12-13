import { ALERT_MSG } from "../../utils/constants.js";

const alertReturnCoins = (money, moneyInMachine) => {
  const { noMoneyCustomer, noMoneyInMachine } = ALERT_MSG;

  if (money === 0) {
    alert(noMoneyCustomer);
  } else if (moneyInMachine === 0) {
    alert(noMoneyInMachine);
  }
};

export { alertReturnCoins };
