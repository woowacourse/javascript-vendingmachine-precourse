import { $, getItemOrNull, setItem } from './utils.js';
import { setInnerHTML, clearInput } from '../view/index.js';
import { KEY, SELECTOR } from '../model/constants.js';

const initChargeDom = () => {
  const charge = getItemOrNull(KEY.charge);
  clearInput($(SELECTOR.chargeInput));
  if (charge || charge === 0) {
    setInnerHTML($(SELECTOR.chargeAmount), charge);
  }
};

const chargeMoney = () => {
  const chargeInput = $(SELECTOR.chargeInput);
  let charge = getItemOrNull(KEY.charge);
  if (charge || charge === 0) {
    charge += parseInt(chargeInput.value);
  } else if (charge === null) {
    charge = parseInt(chargeInput.value);
  }
  setItem(KEY.charge, charge);
  initChargeDom();
};

export const initAllPurchase = () => {
  initChargeDom();
  $(SELECTOR.chargeButton).addEventListener('click', () => chargeMoney());
  // $(SELECTOR.returnButton).addEventListener('click', () => returnMoney());
};
