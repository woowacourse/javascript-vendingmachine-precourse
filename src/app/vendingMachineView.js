import {
  TAB,
  DOM,
  CHARGE_AMOUNT_TEXT,
  FIVE_HUNDRED,
  ONE_HUNDRED,
  FIFTY,
  TEN,
} from '../lib/constants.js';
import { $ } from '../lib/utils.js';
import { PRODUCT_LIST_TABLE_HEADER_TEMPLATE } from '../template/constants.js';

/** View */
class VendingMachineView {
  constructor() {
    this.$app = $('app');
    this.initView();
    this.initDOM();
  }

  initView() {
    this.$app.innerHTML = `<h1>🥤자판기🥤</h1><section id="${DOM.TAB_MENU_SECTION}">
    <button id="${DOM.PRODUCT_ADD_MENU}">${TAB.PRODUCT_ADD_MENU}</button>
    <button id="${DOM.VENDING_MACHINE_MANAGE_MENU}">${TAB.VENDING_MACHINE_MANAGE_MENU}</button>
    <button id="${DOM.PRODUCT_PURCHASE_MENU}">${TAB.PRODUCT_PURCHASE_MENU}</button>
    </section>
    <main id="${DOM.MAIN_SECTION}"></main>`;
  }

  initDOM() {
    this.tabMenuSection = $(DOM.TAB_MENU_SECTION);
    this.mainSection = $(DOM.MAIN_SECTION);
  }

  renderMain(model) {
    if (model.tab === TAB.PRODUCT_ADD_MENU) {
      this.mainSection.innerHTML = this.generateProductAddMenuTemplate(model);
    }
    if (model.tab === TAB.VENDING_MACHINE_MANAGE_MENU) {
      this.mainSection.innerHTML = this.generateVendingMachineManageMenuTemplate(model);
    }
    if (model.tab === TAB.PRODUCT_PURCHASE_MENU) {
      this.mainSection.innerHTML = this.generateProductPurchaseMenuTemplate(model);
    }
  }

  generateProductAddMenuTemplate(model) {
    const productAddSectionTemplate = this.generateProductAddSectionTemplate(
      model.productAddInputsValue
    );
    const productListSectionTemplate = this.generateProductListSectionTemplate(model.productList);

    return `${productAddSectionTemplate}${productListSectionTemplate}`;
  }

  /** h3, input들 만드는거 함수로 분리 */
  generateProductAddSectionTemplate(inputsValue) {
    return `<h3>상품 추가하기</h3><form id="${DOM.PRODUCT_ADD_FORM}">
  <input id="${DOM.PRODUCT_NAME_INPUT}" placeholder="상품명" value="${
      inputsValue[DOM.PRODUCT_NAME_INPUT]
    }"></input>
  <input id="${DOM.PRODUCT_PRICE_INPUT}" type="number" placeholder="가격" value="${
      inputsValue[DOM.PRODUCT_PRICE_INPUT]
    }"></input>
  <input id="${DOM.PRODUCT_QUANTITY_INPUT}" type="number" placeholder="수량" value="${
      inputsValue[DOM.PRODUCT_QUANTITY_INPUT]
    }"></input>
  <button id="${DOM.PRODUCT_ADD_BUTTON}">추가하기</button>
  </form>
    `;
  }

  /** table 헤더 상수화 */
  /** tr 만들어 내는 거 함수로 분리해보자 */
  generateProductListSectionTemplate(productList) {
    return `<h3>상품 현황</h3>
    <table id="${DOM.PRODUCT_LIST_TABLE}">
      ${PRODUCT_LIST_TABLE_HEADER_TEMPLATE}
      ${productList
        .map(
          (product) => `
        <tr>
          <td>${product.name}</td><td>${product.price}</td><td>${product.quantity}</td>
        </tr>
      `
        )
        .join('')}
    </table>
    `;
  }

  /** Vending Machine Manage */
  generateVendingMachineManageMenuTemplate(model) {
    const inputSectionTemplate = this.generateVendingMachineChargeInputSectionTemplate(
      model.vendingMachineChargeInputsValue
    );
    const chargeAmountSectionTemplate = this.generateVendingMachineChargeAmountSectionTemplate();
    const coinQauntitySectionTemplate = this.generateVendingMachineCoinQauntitySectionTemplate(
      model.coins
    );

    return `${inputSectionTemplate}${chargeAmountSectionTemplate}${coinQauntitySectionTemplate}`;
  }

  generateVendingMachineChargeInputSectionTemplate(inputsValue) {
    return `<h3>자판기 동전 충전하기</h3><form id="${DOM.VENDING_MACHINE_CHARGE_FORM}">
    <input id="${
      DOM.VENDING_MACHINE_CHARGE_INPUT
    }" type="number" placeholder="자판기가 보유할 금액" value="${
      inputsValue[DOM.VENDING_MACHINE_CHARGE_INPUT]
    }"></input>
    <button id="${DOM.VENDING_MACHINE_CHARGE_BUTTON}">충전하기</button>
    </form>`;
  }

  generateVendingMachineChargeAmountSectionTemplate() {
    return `<section id="${DOM.VENDING_MACHINE_CHARGE_AMOUNT}">`;
  }

  generateVendingMachineCoinQauntitySectionTemplate(coins) {
    return `<h3>자판기가 보유한 동전</h3>
    <table id="${DOM.VENDING_MACHINE_COINS_TABLE}">
      <tr><td>동전</td><td>개수</td></tr>
      <tr><td>500</td><td id="${DOM.VENDING_MACHINE_COIN_500_QUANTITY}">${coins[FIVE_HUNDRED]}</td></tr>
      <tr><td>100</td><td id="${DOM.VENDING_MACHINE_COIN_100_QUANTITY}">${coins[ONE_HUNDRED]}</td></tr>
      <tr><td>50</td><td id="${DOM.VENDING_MACHINE_COIN_50_QUANTITY}">${coins[FIFTY]}</td></tr>
      <tr><td>10</td><td id="${DOM.VENDING_MACHINE_COIN_10_QUANTITY}">${coins[TEN]}</td></tr>
    </table>`;
  }

  /** Product Purchase */
  generateProductPurchaseMenuTemplate(model) {
    const inputsSectionTemplate = this.generateChargeInputSectionTemplate(model.chargeInputsValue);
    const chargeAmountSectionTemplate = this.generateChargeAmountSectionTemplate(
      model.chargeAmount
    );
    const productPurchaseListSectionTemplate = this.generateProductPurchaseListSectionTemplate(
      model.productList
    );
    const changeCoinSectionTemplate = this.generateChangeCoinSectionTemplate();

    return `${inputsSectionTemplate}${chargeAmountSectionTemplate}${productPurchaseListSectionTemplate}${changeCoinSectionTemplate}`;
  }

  generateChargeInputSectionTemplate(inputValue) {
    return `<h3>금액 투입</h3>
    <form id="${DOM.CHARGE_FORM}">
    <input id="${DOM.CHARGE_INPUT}" type="number" value="${inputValue[DOM.CHARGE_INPUT]}"></input>
    <button id="${DOM.CHARGE_BUTTON}">투입하기</button>
    </form>`;
  }

  generateChargeAmountSectionTemplate(chargeAmount) {
    if (chargeAmount === 0) {
      return `<section id="${DOM.CHARGE_AMOUNT}">투입한 금액 : </section>`;
    }

    return `<section id="${DOM.CHARGE_AMOUNT}">${CHARGE_AMOUNT_TEXT}${chargeAmount}</section>`;
  }

  generateProductPurchaseListSectionTemplate(productList) {
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

  generateChangeCoinSectionTemplate() {
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

  renderProductAdd(productList, productAddInputsValue) {
    $(DOM.PRODUCT_NAME_INPUT).value = productAddInputsValue[DOM.PRODUCT_NAME_INPUT];
    $(DOM.PRODUCT_PRICE_INPUT).value = productAddInputsValue[DOM.PRODUCT_PRICE_INPUT];
    $(DOM.PRODUCT_QUANTITY_INPUT).value = productAddInputsValue[DOM.PRODUCT_QUANTITY_INPUT];
    $(DOM.PRODUCT_LIST_TABLE).innerHTML = `${PRODUCT_LIST_TABLE_HEADER_TEMPLATE}
  ${productList
    .map(
      (product) => `
    <tr>
      <td>${product.name}</td><td>${product.price}</td><td>${product.quantity}</td>
    </tr>
  `
    )
    .join('')}`;
  }

  renderCoins(coins, vendingMachineChargeInputValue) {
    $(DOM.VENDING_MACHINE_CHARGE_INPUT).value = vendingMachineChargeInputValue;
    $(DOM.VENDING_MACHINE_COIN_500_QUANTITY).textContent = coins[FIVE_HUNDRED];
    $(DOM.VENDING_MACHINE_COIN_100_QUANTITY).textContent = coins[ONE_HUNDRED];
    $(DOM.VENDING_MACHINE_COIN_50_QUANTITY).textContent = coins[FIFTY];
    $(DOM.VENDING_MACHINE_COIN_10_QUANTITY).textContent = coins[TEN];
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
  renderCharge(chargeAmount, chargeInputValue) {
    $(DOM.CHARGE_INPUT).value = chargeInputValue;
    $(DOM.CHARGE_AMOUNT).textContent = `${CHARGE_AMOUNT_TEXT}${chargeAmount}`;
  }

  renderReturnCoins(returnCoins) {
    $(DOM.COIN_500_QUANTITY).textContent = returnCoins[FIVE_HUNDRED];
    $(DOM.COIN_100_QUANTITY).textContent = returnCoins[ONE_HUNDRED];
    $(DOM.COIN_50_QUANTITY).textContent = returnCoins[FIFTY];
    $(DOM.COIN_10_QUANTITY).textContent = returnCoins[TEN];
  }
}
export default VendingMachineView;
