import {
  PRODUCT_NAME_INPUT_ID,
  PRODUCT_PRICE_INPUT_ID,
  PRODUCT_QUANTITY_INPUT_ID,
} from '../constant/constant.js';
import { $ } from './initView.js';

export default function clearInput() {
  const $nameInput = $(`#${PRODUCT_NAME_INPUT_ID}`);
  const $priceInput = $(`#${PRODUCT_PRICE_INPUT_ID}`);
  const $quantityInput = $(`#${PRODUCT_QUANTITY_INPUT_ID}`);

  $nameInput.value = '';
  $priceInput.value = '';
  $quantityInput.value = '';
}
