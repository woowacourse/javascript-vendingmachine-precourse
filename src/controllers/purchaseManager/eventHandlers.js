import { getInputValueById } from "../common/getInputValue.js";
import { isValidMoney } from "../chargeManager/checkMoneyInput.js";
import { addMoneyCustomer } from "./chargeCustomerDataController.js";
import { showMoneyCustomer } from "../../views/purchaseManager/showMoneyCustomer.js";
import { ALERT_MSG } from "../../utils/constants.js";

const onClickCustomerChargeButton = () => {
  const $customerChargeButton = document.getElementById("charge-button");

  $customerChargeButton.addEventListener("click", () => {
    const money = getInputValueById("charge-input");
    if (isValidMoney(money)) {
      addMoneyCustomer(money);
      showMoneyCustomer();
    } else {
      alert(ALERT_MSG.wrongChargeMoney);
    }
  });
};

const addPurchaseManagerClickEvents = () => {
  onClickCustomerChargeButton();
};

export { addPurchaseManagerClickEvents };
