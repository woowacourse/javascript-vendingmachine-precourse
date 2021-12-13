import {
  CHARGE_AMOUNT_TEXT,
  DOM,
  FIFTY,
  FIVE_HUNDRED,
  ONE_HUNDRED,
  TEN,
} from '../../lib/constants.js';
import { $ } from '../../lib/utils.js';

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
      return `<section id="${DOM.CHARGE_AMOUNT}">${CHARGE_AMOUNT_TEXT}</section>`;
    }

    return `<section id="${DOM.CHARGE_AMOUNT}">${CHARGE_AMOUNT_TEXT}${chargeAmount}</section>`;
  }

  createProductPurchaseListSectionTemplate(productList) {
    return `<h3>구매할 수 있는 상품 현황</h3>
      <table id="${DOM.PRODUCT_PURCHASE_LIST_TABLE}">
        <tr>
          <td>상품명</td>
          <td>개수</td>
          <td>수량</td>
          <td>구매</td>
        </tr>
        ${productList
          .map(
            (product) =>
              `<tr class="${DOM.PRODUCT_PURCHASE_ITEM_CLASSNAME}">
              <td class="${DOM.PRODUCT_PURCHASE_NAME_CLASSNAME}" ${DOM.DATASET_PRODUCT_NAME}="${product.name}">${product.name}</td>
              <td class="${DOM.PRODUCT_PURCHASE_PRICE_CLASSNAME}" ${DOM.DATASET_PRODUCT_PRICE}="${product.price}">${product.price}</td>
              <td class="${DOM.PRODUCT_PURCHASE_QUANTITY_CLASSNAME}" ${DOM.DATASET_PRODUCT_QUNATITY}="${product.quantity}">${product.quantity}</td>
              <td><button class="${DOM.PURCHASE_BUTTON_CLASSNAME}" data-id="${product.id}">상품구매</button></td>
              <tr>`
          )
          .join('')}
      </table>`;
  }

  createChangeCoinSectionTemplate() {
    return `<h3>잔돈</h3>
      <button id="${DOM.COIN_RETURN_BUTTON}">반환하기</button>
      <table>
        <tr>
          <td>동전</td>
          <td>개수</td>
        </tr>
        <tr>
          <td>500</td>
          <td id="${DOM.COIN_500_QUANTITY}"></td>
        </tr>
        <tr>
          <td>100</td>
          <td id="${DOM.COIN_100_QUANTITY}"></td>
        </tr>
        <tr>
          <td>50</td>
          <td id="${DOM.COIN_50_QUANTITY}"></td>
        </tr>
        <tr>
          <td>10</td>
          <td id="${DOM.COIN_10_QUANTITY}"></td>
        </tr>
      </table>`;
  }

  renderProductPurchaseList(productList) {
    $(DOM.PRODUCT_PURCHASE_LIST_TABLE).innerHTML = `<tr>
      <td>상품명</td>
      <td>개수</td>
      <td>수량</td>
      <td>구매</td>
    </tr>
    ${productList
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

  /** renderCharge - clearChageInput 하는 로직 분리하기 */
  renderCharge(chargeAmount, chargeInputsValue) {
    $(DOM.CHARGE_INPUT).value = chargeInputsValue[DOM.CHARGE_INPUT];
    $(DOM.CHARGE_AMOUNT).textContent = `${CHARGE_AMOUNT_TEXT}${chargeAmount}`;
  }

  renderReturnCoins(returnCoins) {
    $(DOM.COIN_500_QUANTITY).textContent = returnCoins[FIVE_HUNDRED];
    $(DOM.COIN_100_QUANTITY).textContent = returnCoins[ONE_HUNDRED];
    $(DOM.COIN_50_QUANTITY).textContent = returnCoins[FIFTY];
    $(DOM.COIN_10_QUANTITY).textContent = returnCoins[TEN];
  }
}
export default ProductPurchaseView;
