import { purchaseProduct } from "../components/purchaseProduct.js";
import {
  ID,
  IS_RENDERED_INSERTED_MONEY,
  IS_RENDERED_RETURN_CHANGES,
  NAME,
  QUANTITY,
} from "../assets/constants/public.js";
import { PURCHASE_TAP } from "../assets/constants/purchaseTap.js";
import { saveAllToLocalStorage } from "../assets/utils/utils.js";
import {
  checkCanPurchase,
  checkInsertMoneyInput,
} from "../assets/validations/purchaseTapValidation.js";
import {
  renderChanges,
  renderMoney,
  renderPurchase,
  renderPurchaseProductMenuView,
} from "../views/purchaseProductView.js";

const resetInput = () => {
  const $charge_input = document.getElementById(
    PURCHASE_TAP.INSERT_MONEY_INPUT[ID]
  );
  $charge_input.value = "";
};

const getNameTag = form => {
  return form.querySelector(`.${PURCHASE_TAP.PRODUCT_STATE_CLASSES[NAME]}`);
};

const getPriceTag = form => {
  return form.querySelector(`.${PURCHASE_TAP.PRODUCT_STATE_CLASSES[ID]}`);
};

export const getQuantityTag = form => {
  return form.querySelector(`.${PURCHASE_TAP.PRODUCT_STATE_CLASSES[QUANTITY]}`);
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
    `#${PURCHASE_TAP.INSERT_MONEY_INPUT[ID]}`
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
    renderPurchase(purchaseProduct, form);
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
