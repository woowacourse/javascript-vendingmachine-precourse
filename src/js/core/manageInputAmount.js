import { $ } from '../util/dom.js';
import { check } from '../util/checkValue.js';
import { renderInputedMoney } from '../render/render.js';

export const addInputAmount = e => {
  e.preventDefault();
  const inputAmount = $('#charge-input').value;
  if (
    check.inputValueNotNum(inputAmount) ||
    check.inputValueDivideTen(inputAmount) ||
    check.inputValueRange(inputAmount)
  ) {
    window.alert('잘못된 값을 입력하셨습니다.');
    return;
  }
  localStorage.setItem('inputAmount', JSON.stringify(renderInputedMoney()));
};
