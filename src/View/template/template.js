import {
  VANDING_MACHINE_MENU,
  ADD_PRODUCT,
  CHARGE_COIN,
  PURCHASE,
} from "../../constant/HTMLConstant.js";
import { TITLE, TEXT, BUTTON } from "../../constant/textConstant.js";

const initialize = `<h1>${TITLE.VENDING_MACHINE}</h1>
<div id="menu">
<button id=${VANDING_MACHINE_MENU.PRODUCT_ADD}>${BUTTON.MANAGE}</button>
<button id=${VANDING_MACHINE_MENU.COIN}>${BUTTON.CHARGE_COIN}</button>
<button id=${VANDING_MACHINE_MENU.PURCHASE}>${BUTTON.BUY}</button>
</div>
<div id="form"></div>`;

const h3 = (title) => `<h3>${title}</h3>`;

const tableInitialize = (ths) => `<table>
<thead>
<tr>${ths
  .map((th) => {
    return `<th>${th}</th>`;
  })
  .join("")}</tr>
</thead>
</table>`;

const makeProductRow = (data) => `<tr class=${ADD_PRODUCT.PRODUCT_ITEM}>
<td class=${ADD_PRODUCT.PRODUCT_NAME}>${data.name}</td>
<td class=${ADD_PRODUCT.PRODUCT_PRICE}>${data.price}</td>
<td class=${ADD_PRODUCT.PRODUCT_QUANTITY}>${data.quantity}</td>
</tr>`;

const makeAvailableRow = (data) => `<tr class=${PURCHASE.ITEM}>
<td class=${PURCHASE.NAME} ${PURCHASE.DATASET_NAME}=${data.name}>${data.name}</td>
<td class=${PURCHASE.PRICE} ${PURCHASE.DATASET_PRICE}=${data.price}>${data.price}</td>
<td class=${PURCHASE.QUANTITY} ${PURCHASE.DATASET_QUANTITY}=${data.quantity}>${data.quantity}</td>
<td><button class=${PURCHASE.PURCHASE}>${BUTTON.PURCHASE}</button></td>
</tr>`;

const coinTableInitailize = (id) => `<table><thead>
<tr>
<th>${TEXT.COIN}</th>
<th>${TEXT.COUNT}</th>
</tr>
</thead>
<tbody>
${TEXT.COIN_TYPE.map(
  (coinType, index) =>
    `<tr><td>${coinType}원</td><td id=${id[index]}></td></tr>`
).join("")}
</tbody>
</table>`;

const chargeInputForm = (title, input, button) => `<h3>${title}</h3>
<div>
<input id=${input.id} placeholder=${input.placeholder}>
<button id=${button.id}>${button.text}</button>
</div>
`;

const productAddForm = `<h3>${TITLE.ADD_PRODCUT}</h3>
<div>
<input id=${ADD_PRODUCT.NAME} placeholder=${TEXT.NAME}>
<input id=${ADD_PRODUCT.PRICE} placeholder=${TEXT.PRICE}>
<input id=${ADD_PRODUCT.QUANTITY} placeholder=${TEXT.QUANTITIY}>
<button id=${ADD_PRODUCT.BUTTON}>${BUTTON.ADD}</button>
</div>
<h3>${TITLE.NOW_PRODUCT}</h3>
${tableInitialize(TEXT.PRODUCT)}
`;

const coinChargeForm = (sum) => `<h3>${TITLE.CHARGE_COIN}</h3>
<div>
<input id=${CHARGE_COIN.INPUT} placeholder='${TEXT.COIN_WILL}'>
<button id=${CHARGE_COIN.BUTTON}>${BUTTON.CHARGE}</button>
<div>${TEXT.COIN_DONE}
<span id = ${CHARGE_COIN.AMOUNT}>${sum > 0 ? sum : ""}</span>
</div>
</div>
<h3>${TITLE.NOW_COIN}</h3>
${coinTableInitailize(CHARGE_COIN.QUANTITY)}
`;

const purchaseForm = (sum) => `<h3>${TITLE.ADD_MONEY}</h3>
<div>
<input id=${PURCHASE.INPUT} placeholder='${TEXT.PURCHASE_WILL}'>
<button id=${PURCHASE.ADD}>${BUTTON.BILL}</button>
<div>${TEXT.PURCHASE_DONE}
<span id = ${PURCHASE.AMOUNT}>${sum > 0 ? sum : ""}</span>
</div>
<h3>${TITLE.AVAILABLE_PRODUCT}</h3>
${tableInitialize([...TEXT.PRODUCT, TEXT.BUY])}
<h3>${TITLE.LEFTOVER}</h3>
<button id=${PURCHASE.RETURN}>${BUTTON.RETURN}</button>
${coinTableInitailize(PURCHASE.LEFT_COIN)}
`;

export {
  initialize,
  h3,
  chargeInputForm,
  makeProductRow,
  makeAvailableRow,
  productAddForm,
  coinChargeForm,
  purchaseForm,
};
