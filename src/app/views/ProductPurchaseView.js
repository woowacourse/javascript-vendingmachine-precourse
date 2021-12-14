import { FIFTY, FIVE_HUNDRED, ONE_HUNDRED, TEN } from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';
import {
  CHANGE_COIN_TABLE_HEADER,
  PRODUCT_PURCHASE_LIST_TABLE_HEADER_TEMPLATE,
} from '../../template/constants.js';
import { CHARGE_AMOUNT_TEXT, DOM } from '../constants.js';

class ProductPurchaseView {
  constructor(mainSection, chargeInputsValue, chargeAmount, productList) {
    this.$app = mainSection;
    this.renderView(chargeInputsValue, chargeAmount, productList);
  }

  renderView(chargeInputsValue, chargeAmount, productList) {
    this.$app.innerHTML = this.generateViewTemplate(chargeInputsValue, chargeAmount, productList);
  }

  generateViewTemplate(chargeInputsValue, chargeAmount, productList) {
    const inputsSectionTemplate = this.createChargeInputSectionTemplate(chargeInputsValue);
    const chargeAmountSectionTemplate = this.createChargeAmountSectionTemplate(chargeAmount);
    const productPurchaseListSectionTemplate =
      this.createProductPurchaseListSectionTemplate(productList);
    const changeCoinSectionTemplate = this.createChangeCoinSectionTemplate();

    return `${inputsSectionTemplate}${chargeAmountSectionTemplate}${productPurchaseListSectionTemplate}${changeCoinSectionTemplate}`;
  }

  createChargeInputSectionTemplate(inputValue) {
    return `<h3>금액 투입</h3>
      <form id="${DOM.CHARGE_FORM}">
      <input id="${DOM.CHARGE_INPUT}" type="number" value="${inputValue[DOM.CHARGE_INPUT]}"></input>
      <button id="${DOM.CHARGE_BUTTON}">투입하기</button>
      </form>`;
  }

  createChargeAmountSectionTemplate(chargeAmount) {
    if (chargeAmount === 0) {
      return `${CHARGE_AMOUNT_TEXT}<span id="${DOM.CHARGE_AMOUNT}"></span>`;
    }

    return `${CHARGE_AMOUNT_TEXT}<span id="${DOM.CHARGE_AMOUNT}">${chargeAmount}</span>`;
  }

  createProductPurchaseListSectionTemplate(productList) {
    return `<h3>구매할 수 있는 상품 현황</h3>
      <table id="${DOM.PRODUCT_PURCHASE_LIST_TABLE}">
        ${PRODUCT_PURCHASE_LIST_TABLE_HEADER_TEMPLATE}
        ${this.createProductPurchaseListTemplate(productList)}
      </table>`;
  }

  createChangeCoinSectionTemplate() {
    return `<h3>잔돈</h3>
      <button id="${DOM.COIN_RETURN_BUTTON}">반환하기</button>
      <table>
        ${CHANGE_COIN_TABLE_HEADER}
        <tr><td>500</td><td id="${DOM.COIN_500_QUANTITY}"></td></tr>
        <tr><td>100</td><td id="${DOM.COIN_100_QUANTITY}"></td></tr>
        <tr><td>50</td><td id="${DOM.COIN_50_QUANTITY}"></td></tr>
        <tr><td>10</td><td id="${DOM.COIN_10_QUANTITY}"></td></tr>
      </table>`;
  }

  createProductPurchaseListTemplate(productList) {
    return `${productList
      .map(
        (product) =>
          `<tr class="${DOM.PRODUCT_PURCHASE_ITEM_CLASSNAME}">
          <td class="${DOM.PRODUCT_PURCHASE_NAME_CLASSNAME}" ${DOM.DATASET_PRODUCT_NAME}="${product.name}">${product.name}</td>
          <td class="${DOM.PRODUCT_PURCHASE_PRICE_CLASSNAME}" ${DOM.DATASET_PRODUCT_PRICE}="${product.price}">${product.price}</td>
          <td class="${DOM.PRODUCT_PURCHASE_QUANTITY_CLASSNAME}" ${DOM.DATASET_PRODUCT_QUNATITY}="${product.quantity}">${product.quantity}</td>
          <td><button class="${DOM.PURCHASE_BUTTON_CLASSNAME}" data-id="${product.id}">상품구매</button></td>
          <tr>`
      )
      .join('')}`;
  }

  renderProductPurchaseList(productList) {
    $(DOM.PRODUCT_PURCHASE_LIST_TABLE).innerHTML = `${PRODUCT_PURCHASE_LIST_TABLE_HEADER_TEMPLATE}
    ${this.createProductPurchaseListTemplate(productList)}
    `;
  }

  /** renderCharge - clearChageInput 하는 로직 분리하기 */
  renderCharge(chargeAmount, chargeInputsValue) {
    $(DOM.CHARGE_INPUT).value = chargeInputsValue[DOM.CHARGE_INPUT];
    $(DOM.CHARGE_AMOUNT).textContent = `${chargeAmount}`;
  }

  renderReturnCoins(returnCoins) {
    $(DOM.COIN_500_QUANTITY).textContent = `${returnCoins[FIVE_HUNDRED]}개`;
    $(DOM.COIN_100_QUANTITY).textContent = `${returnCoins[ONE_HUNDRED]}개`;
    $(DOM.COIN_50_QUANTITY).textContent = `${returnCoins[FIFTY]}개`;
    $(DOM.COIN_10_QUANTITY).textContent = `${returnCoins[TEN]}개`;
  }
}
export default ProductPurchaseView;
