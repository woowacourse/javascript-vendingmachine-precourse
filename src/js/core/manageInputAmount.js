import { $ } from '../util/dom.js';
import { check } from '../util/checkValue.js';
import { store } from '../store/store.js';
import { localStorageConstants } from '../constant/localstorage.js';
import { DECIMAL } from '../constant/constant.js';

export const addInputAmount = e => {
  e.preventDefault();
  const inputtedAmount = $('#charge-input').value;
  if (
    check.inputValueNotNum(inputtedAmount) ||
    check.inputValueDivideTen(inputtedAmount) ||
    check.inputValueRange(inputtedAmount)
  ) {
    window.alert('잘못된 값을 입력하셨습니다.');
    return;
  }
  const totalAmount =
    parseInt(inputtedAmount, DECIMAL) +
    store.getItem(localStorageConstants.INPUT_AMOUNT);
  store.setItem(localStorageConstants.INPUT_AMOUNT, totalAmount);
};

export const getSpanValue = (dataToImport, e) => {
  let spanValue = 0;
  if (store.getItem(dataToImport) !== null) {
    spanValue = store.getItem(dataToImport);
  }
  if (e !== undefined && e.target.id === 'vending-machine-charge-form') {
    spanValue += parseInt($('#vending-machine-charge-input').value, DECIMAL);
  } else if (e !== undefined && e.target.id === 'charge-form') {
    spanValue += parseInt($('#charge-input').value, DECIMAL);
  }
  return spanValue;
};
