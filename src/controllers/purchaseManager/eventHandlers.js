import { getInputValueById } from "../common/getInputValue.js";
import { isValidMoney } from "../chargeManager/checkMoneyInput.js";
import { addMoneyCustomer } from "./chargeCustomerDataController.js";
import { ALERT_MSG } from "../../utils/constants.js";
import { purchaseProduct } from "./purchaseDataController.js";
import {
  showAfterAddOrPurchaseProduct,
  showAfterReturnCoins,
} from "../../views/common/showAll.js";
import { returnCoins } from "./returnCoinsDataController.js";

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
  });
};

const purchaseLogic = index => {
  const name = document.getElementsByClassName("product-purchase-name")[index]
    .dataset.productName;
  const price = parseInt(
    document.getElementsByClassName("product-purchase-price")[index].dataset.productPrice,
    10,
  );
  const money = parseInt(JSON.parse(localStorage.getItem("money")), 10);

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
      purchaseLogic(i);
    });
  }
};

const onClickCoinReturnButton = () => {
  const $coinReturnButton = document.getElementById("coin-return-button");

  $coinReturnButton.addEventListener("click", () => {
    const money = parseInt(JSON.parse(localStorage.getItem("money")), 10);
    returnCoins(money);
    showAfterReturnCoins();
  });
};

const addPurchaseManagerClickEvents = () => {
  onClickCustomerChargeButton();
  onClickCoinReturnButton();
};

export { addPurchaseManagerClickEvents, onClickPurchaseButton };
