import { onClickChargeButton } from "../controllers/chargeChangeController.js";
import {
  CHARGE_TAP,
  ID,
  IS_RENDERED_CHARGE_TAP,
  VIEW_CONTAINER,
} from "../utils/constants.js";
import {
  makeTitle,
  makeChangeStateContainer,
  makeResultContainer,
  makeInputForm,
  getMoneyText,
  getQuantityText,
} from "../utils/utils.js";

// ----자판기 동전 충전하기 폼 렌더링 함수----
const makeChargeChangeContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(CHARGE_TAP.chargeChangeTitle));
  div.appendChild(
    makeInputForm(
      CHARGE_TAP.chargeInput,
      CHARGE_TAP.chargeButton,
      onClickChargeButton
    )
  );
  div.appendChild(
    makeResultContainer(
      CHARGE_TAP.changeAmountHeader,
      CHARGE_TAP.changeAmountId
    )
  );

  return div;
};

export const renderChangeAmount = money => {
  const $vending_machine_charge_amount = document.getElementById(
    CHARGE_TAP.changeAmountId
  );
  $vending_machine_charge_amount.innerText = getMoneyText(money);
};

export const renderCoins = chargeChange => {
  const coins = chargeChange.getCoins();
  CHARGE_TAP.changeStateTableRaws.forEach((rawInformation, index) => {
    document.getElementById(`${rawInformation[ID]}`).innerText =
      getQuantityText(coins[index]);
  });
};

export const renderChargeChangeMenuView = chargeChange => {
  const $view_container = document.getElementById(VIEW_CONTAINER);
  $view_container.appendChild(makeChargeChangeContainer());
  $view_container.appendChild(
    makeChangeStateContainer(
      CHARGE_TAP.changeStateTitle,
      CHARGE_TAP.changeStateTableHeaders,
      CHARGE_TAP.changeStateTableRaws
    )
  );

  if (localStorage.getItem(IS_RENDERED_CHARGE_TAP) === "TRUE") {
    renderChangeAmount(chargeChange.getTotalMoney());
    renderCoins(chargeChange);
  }
};
