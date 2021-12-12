import { vendingMachine } from "../components/vendingMachine.js";
import {
  ID,
  IS_RENDERED_INSERTED_MONEY,
  IS_RENDERED_RETURN_CHANGES,
  NAME,
  PURCHASE_TAP,
  QUANTITY,
} from "../utils/constants.js";
import { saveToLocalStorage } from "../utils/utils.js";
import {
  checkCanPurchase,
  checkInsertMoneyInput,
} from "../utils/validation.js";
import { renderChanges, renderMoney } from "../views/purchaseProductView.js";

const resetInput = () => {
  const $charge_input = document.getElementById(
    PURCHASE_TAP.insertMoneyInput[ID]
  );
  $charge_input.value = "";
};

const getNameTag = form => {
  return form.querySelector(`.${PURCHASE_TAP.productStateIds[NAME]}`);
};

const getPriceTag = form => {
  return form.querySelector(`.${PURCHASE_TAP.productStateIds[ID]}`);
};

const getQuantityTag = form => {
  return form.querySelector(`.${PURCHASE_TAP.productStateIds[QUANTITY]}`);
};

const updateQuantity = quantity => {
  quantity.innerText = parseInt(quantity.innerText) - ID;
};

const setIsRenderInsertedMoney = () => {
  localStorage[IS_RENDERED_INSERTED_MONEY] = "TRUE";
};

const setReturnChanges = returnChanges => {
  localStorage[IS_RENDERED_RETURN_CHANGES] = returnChanges;
};

export const onClickInsertButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const money = form.querySelector(
    `#${PURCHASE_TAP.insertMoneyInput[ID]}`
  ).value;

  if (checkInsertMoneyInput(money)) {
    vendingMachine.insertMoney(parseInt(money));
    renderMoney(vendingMachine.getMoney());
    saveToLocalStorage(vendingMachine);
    setIsRenderInsertedMoney();
    resetInput();
  }
};

export const onClickPurchaseButton = event => {
  event.preventDefault();
  const form = event.target.parentElement.parentElement;

  if (
    checkCanPurchase(
      getQuantityTag(form).innerText,
      vendingMachine.getMoney(),
      getPriceTag(form).innerText
    )
  ) {
    vendingMachine.purchaseProduct(getNameTag(form).innerText);
    renderMoney(vendingMachine.getMoney());
    updateQuantity(getQuantityTag(form));
    setIsRenderInsertedMoney();
    saveToLocalStorage(vendingMachine);
  }
};

export const onClickReturnButton = event => {
  event.preventDefault();
  const returnChanges = vendingMachine.getChanges();
  renderMoney(vendingMachine.getMoney());
  renderChanges(returnChanges);
  saveToLocalStorage(vendingMachine);
  setIsRenderInsertedMoney();
  setReturnChanges(returnChanges);
};
