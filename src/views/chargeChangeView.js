import { onClickChargeButton } from "../menus/chargeChangeMenu.js";
import { CHARGE_CHANGE_TAP } from "../utils/constants.js";
import {
  makeTitle,
  makeChangeStateContainer,
  makeResultContainer,
  makeInputForm,
} from "../utils/utils.js";

// ----자판기 동전 충전하기 폼 렌더링 함수----
const makeChargeChangeContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(CHARGE_CHANGE_TAP.chargeChangeTitle));
  div.appendChild(
    makeInputForm(
      CHARGE_CHANGE_TAP.chargeInputInformation,
      CHARGE_CHANGE_TAP.chargeButtonInformation,
      onClickChargeButton
    )
  );
  div.appendChild(
    makeResultContainer(
      CHARGE_CHANGE_TAP.changeAmountHeader,
      CHARGE_CHANGE_TAP.changeAmountId
    )
  );

  return div;
};

export const renderChangeAmount = money => {
  const $vending_machine_charge_amount = document.getElementById(
    CHARGE_CHANGE_TAP.changeAmountId
  );
  $vending_machine_charge_amount.innerText = money;
};

export const renderCoins = vendingMachine => {
  const coins = vendingMachine.getCoins();
  CHARGE_CHANGE_TAP.changeStateTableRaws.forEach((rawInformation, index) => {
    document.getElementById(
      `${rawInformation[1]}`
    ).innerText = `${coins[index]}개`;
  });
};

export const renderChargeChangeMenuView = () => {
  const $view_container = document.getElementById("view-container");
  $view_container.appendChild(makeChargeChangeContainer());
  $view_container.appendChild(
    makeChangeStateContainer(
      CHARGE_CHANGE_TAP.changeStateTitle,
      CHARGE_CHANGE_TAP.changeStateTableHeader,
      CHARGE_CHANGE_TAP.changeStateTableRaws
    )
  );
};
