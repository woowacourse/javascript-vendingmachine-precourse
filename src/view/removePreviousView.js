import $ from '../util/$.js';
import {
  PRODUCT_ADD_CONTAINER_ID,
  CHARGE_CONTAINER_ID,
  PURCHASE_CONTAINER_ID,
} from '../constant/constant.js';

export default function removePreviousView($app) {
  const $addProduct = $(`#${PRODUCT_ADD_CONTAINER_ID}`);
  const $charge = $(`#${CHARGE_CONTAINER_ID}`);
  const $purchase = $(`#${PURCHASE_CONTAINER_ID}`);

  if ($addProduct) { $app.removeChild($addProduct); }
  if ($charge) { $app.removeChild($charge); }
  if ($purchase) { $app.removeChild($purchase); }
}
