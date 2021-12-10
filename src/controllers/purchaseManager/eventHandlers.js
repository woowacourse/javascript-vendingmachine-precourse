import { getInputValueById } from "../../utils/inputValue.js";
import { isValidMoney } from "../common/checkMoneyInput.js";
import { getItemFromLocalStorage } from "../../utils/itemFromLocalStorage.js";
import { addMoneyCustomer } from "./chargeCustomerDataController.js";
import { purchaseProduct } from "./purchaseDataController.js";
import { returnCoins } from "./returnCoinsDataController.js";
import { ALERT_MSG } from "../../utils/constants.js";
import { resetChargeCustomerInput } from "../../views/common/resetInput.js";
import {
  showAfterAddOrPurchaseProduct,
  showAfterReturnCoins,
} from "../../views/common/showAll.js";

const onClickCustomerChargeButton = () => {
  const $customerChargeButton = document.getElementById("charge-button");

  $customerChargeButton.addEventListener("click", () => {
    const money = getInputValueById("charge-input");

    if (isValidMoney(money)) {
      addMoneyCustomer(money);
      showAfterAddOrPurchaseProduct();
    } else {
      alert(ALERT_MSG.wrongChargeMoney);
    }
    resetChargeCustomerInput();
  });
};

const purchaseLogic = (name, price) => {
  const money = parseInt(getItemFromLocalStorage("money"), 10);

  if (money < price) {
    alert(ALERT_MSG.lackMoney);
  } else {
    purchaseProduct(name, price, money);
    showAfterAddOrPurchaseProduct();
  }
};

const onClickPurchaseButton = () => {
  const $purchaseButtons = document.getElementsByClassName("purchase-button");

  for (let i = 0; i < $purchaseButtons.length; i++) {
    $purchaseButtons[i].addEventListener("click", () => {
      const name = document.getElementsByClassName("product-purchase-name")[i]
        .dataset.productName;
      const price = document.getElementsByClassName("product-purchase-price")[i]
        .dataset.productPrice;
      purchaseLogic(name, parseInt(price, 10));
    });
  }
};

const onClickCoinReturnButton = () => {
  const $coinReturnButton = document.getElementById("coin-return-button");

  $coinReturnButton.addEventListener("click", () => {
    const money = parseInt(getItemFromLocalStorage("money"), 10);
    returnCoins(money);
    showAfterReturnCoins();
  });
};

const addPurchaseManagerClickEvents = () => {
  onClickCustomerChargeButton();
  onClickCoinReturnButton();
};

export { addPurchaseManagerClickEvents, onClickPurchaseButton };
