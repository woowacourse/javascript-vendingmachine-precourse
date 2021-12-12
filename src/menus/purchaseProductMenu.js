import { vendingMachine } from "../components/vendingMachine.js";
import { PURCHASE_PRODUCT_TAP } from "../utils/constants.js";
import { saveToLocalStorage } from "../utils/utils.js";
import {
  checkCanPurchase,
  checkInsertMoneyInput,
} from "../utils/validation.js";
import { renderChanges, renderMoney } from "../views/purchaseProductView.js";

const resetInput = () => {
  const $charge_input = document.getElementById("charge-input");
  $charge_input.value = "";
};

const getNameTag = form => {
  return form.querySelector(`.${PURCHASE_PRODUCT_TAP.productStateName}`);
};

const getPriceTag = form => {
  return form.querySelector(`.${PURCHASE_PRODUCT_TAP.productStatePrice}`);
};

const getQuantityTag = form => {
  return form.querySelector(`.${PURCHASE_PRODUCT_TAP.productStateQuantity}`);
};

const updateQuantity = quantity => {
  quantity.innerText = parseInt(quantity.innerText) - 1;
};

const setIsRenderInsertedMoney = () => {
  localStorage["isRenderInsertedMoney"] = "TRUE";
};

const setReturnChanges = returnChanges => {
  localStorage["returnChanges"] = returnChanges;
};

export const onClickInsertButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const money = form.querySelector("#charge-input").value;

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
