import { onClickChargeButton } from "../controllers/chargeChangeController.js";
import {
  ID,
  IS_RENDERED_CHARGE_TAP,
  VIEW_CONTAINER,
} from "../assets/constants/public.js";
import { CHARGE_TAP } from "../assets/constants/chargeTap.js";
import { getQuantityText } from "../assets/utils/utils.js";
import { makeChangeStateContainer, makeFormContainer } from "./publicView.js";

// ----자판기 동전 충전하기 폼 렌더링 함수----
export const renderChangeAmount = money => {
  const $vending_machine_charge_amount = document.getElementById(
    CHARGE_TAP.FORM.AMOUNT_ID
  );
  $vending_machine_charge_amount.innerText = money;
};

export const renderCoins = chargeChange => {
  const coins = chargeChange.getCoins();
  CHARGE_TAP.CHANGE_STATE_TABLE_RAWS.forEach((rawInformation, index) => {
    document.getElementById(`${rawInformation[ID]}`).innerText =
      getQuantityText(coins[index]);
  });
};

const renderLocalstrorageInformation = chargeChange => {
  if (localStorage.getItem(IS_RENDERED_CHARGE_TAP) === "TRUE") {
    renderChangeAmount(chargeChange.getTotalMoney());
    renderCoins(chargeChange);
  }
};

export const renderChargeChangeMenuView = chargeChange => {
  const $view_container = document.getElementById(VIEW_CONTAINER);
  $view_container.appendChild(
    makeFormContainer(CHARGE_TAP.FORM, onClickChargeButton)
  );
  $view_container.appendChild(
    makeChangeStateContainer(
      CHARGE_TAP.CHANGE_STATE_TITLE,
      CHARGE_TAP.CHANGE_STATE_TABLE_HEADERS,
      CHARGE_TAP.CHANGE_STATE_TABLE_RAWS
    )
  );

  renderLocalstrorageInformation(chargeChange);
};
