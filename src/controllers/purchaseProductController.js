import { purchaseProduct } from "../components/purchaseProduct.js";
import {
  ID,
  IS_RENDERED_INSERTED_MONEY,
  IS_RENDERED_RETURN_CHANGES,
  NAME,
  PURCHASE_TAP,
  QUANTITY,
} from "../utils/constants.js";
import { saveAllToLocalStorage } from "../utils/utils.js";
import {
  checkCanPurchase,
  checkInsertMoneyInput,
} from "../utils/validation.js";
import {
  renderChanges,
  renderMoney,
  renderPurchase,
  renderPurchaseProductMenuView,
} from "../views/purchaseProductView.js";

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

export const getQuantityTag = form => {
  return form.querySelector(`.${PURCHASE_TAP.productStateIds[QUANTITY]}`);
};

const setIsRenderInsertedMoney = () => {
  localStorage[IS_RENDERED_INSERTED_MONEY] = "TRUE";
};

const setReturnChanges = returnChanges => {
  localStorage[IS_RENDERED_RETURN_CHANGES] = returnChanges;
};

export const onClickPurchaseProductTab = e => {
  event.preventDefault();
  purchaseProduct.loadFromLocalStorage();
  renderPurchaseProductMenuView(purchaseProduct);
};

export const onClickInsertButton = event => {
  event.preventDefault();
  const form = event.target.parentElement;
  const money = form.querySelector(
    `#${PURCHASE_TAP.insertMoneyInput[ID]}`
  ).value;

  if (checkInsertMoneyInput(money)) {
    purchaseProduct.insertMoney(parseInt(money));
    renderMoney(purchaseProduct.getMoney());
    saveAllToLocalStorage(purchaseProduct);
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
      purchaseProduct.getMoney(),
      getPriceTag(form).innerText
    )
  ) {
    purchaseProduct.purchaseProduct(getNameTag(form).innerText);
    renderPurchase(form);
    saveAllToLocalStorage(purchaseProduct);
    setIsRenderInsertedMoney();
  }
};

export const onClickReturnButton = event => {
  event.preventDefault();
  const returnChanges = purchaseProduct.getChanges();
  renderMoney(purchaseProduct.getMoney());
  renderChanges(returnChanges);
  saveAllToLocalStorage(purchaseProduct);
  setReturnChanges(returnChanges);
  setIsRenderInsertedMoney();
};
