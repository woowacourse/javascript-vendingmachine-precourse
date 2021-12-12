import { onClickChargeButton } from "../controllers/chargeChangeController.js";
import {
  ID,
  IS_RENDERED_CHARGE_TAP,
  VIEW_CONTAINER,
} from "../assets/constants/public.js";
import { CHARGE_TAP } from "../assets/constants/chargeTap.js";
import {
  makeTitle,
  makeChangeStateContainer,
  makeResultContainer,
  makeInputForm,
  getMoneyText,
  getQuantityText,
} from "../assets/utils/utils.js";

// ----자판기 동전 충전하기 폼 렌더링 함수----
const makeChargeChangeContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(CHARGE_TAP.CHARGE_CHANGE_TITLE));
  div.appendChild(
    makeInputForm(
      CHARGE_TAP.CHARGE_INPUT,
      CHARGE_TAP.CHARGE_BUTTON,
      onClickChargeButton
    )
  );
  div.appendChild(
    makeResultContainer(
      CHARGE_TAP.CHANGE_AMOUNT_HEADER,
      CHARGE_TAP.CHANGE_AMOUNT_ID
    )
  );

  return div;
};

export const renderChangeAmount = money => {
  const $vending_machine_charge_amount = document.getElementById(
    CHARGE_TAP.CHANGE_AMOUNT_ID
  );
  $vending_machine_charge_amount.innerText = getMoneyText(money);
};

export const renderCoins = chargeChange => {
  const coins = chargeChange.getCoins();
  CHARGE_TAP.CHANGE_STATE_TABLE_RAWS.forEach((rawInformation, index) => {
    document.getElementById(`${rawInformation[ID]}`).innerText =
      getQuantityText(coins[index]);
  });
};

export const renderChargeChangeMenuView = chargeChange => {
  const $view_container = document.getElementById(VIEW_CONTAINER);
  $view_container.appendChild(makeChargeChangeContainer());
  $view_container.appendChild(
    makeChangeStateContainer(
      CHARGE_TAP.CHANGE_STATE_TITLE,
      CHARGE_TAP.CHANGE_STATE_TABLE_HEADERS,
      CHARGE_TAP.CHANGE_STATE_TABLE_RAWS
    )
  );

  if (localStorage.getItem(IS_RENDERED_CHARGE_TAP) === "TRUE") {
    renderChangeAmount(chargeChange.getTotalMoney());
    renderCoins(chargeChange);
  }
};
