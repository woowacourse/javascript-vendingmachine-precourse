import { $ } from '../common/elements.js';

import {
  checkInputsValidation,
  onInvalidInputsSubmit,
} from './CheckValidation.js';

function onProductAddClick(event) {
  event.preventDefault();
  const inputsValidation = checkInputsValidation();

  if (!inputsValidation) onInvalidInputsSubmit();
}

export default function setProductAddClick() {
  $('product-add-button').addEventListener('click', onProductAddClick);
}
