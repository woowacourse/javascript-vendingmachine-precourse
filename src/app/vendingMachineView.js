import { TAB, DOM } from '../lib/constants.js';

/** View */
class VendingMachineView {
  constructor() {
    this.$app = document.getElementById('app');
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
    this.tabMenuSection = document.getElementById(DOM.TAB_MENU_SECTION);
    this.mainSection = document.getElementById(DOM.MAIN_SECTION);
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
    return `<h3>상품 추가하기</h3><form id="${DOM.PRODUCT_INFORMATION_INPUT_FORM}">
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
    <table>
      <tr>
        <td>상품명</td><td>가격</td><td>수량</td>
      </tr>
      ${productList
        .map(
          (product) => `
        <tr>
          <td>${product.name}</td><td>${product.price}</td><td>${product.count}</td>
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
    const coinQauntitySectionTemplate = this.generateVendingMachineCoinQauntitySectionTemplate();

    return `${inputSectionTemplate}${chargeAmountSectionTemplate}${coinQauntitySectionTemplate}`;
  }

  generateVendingMachineChargeInputSectionTemplate(inputsValue) {
    return `<h3>자판기 동전 충전하기</h3><form>
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

  generateVendingMachineCoinQauntitySectionTemplate() {
    return `<h3>자판기가 보유한 동전</h3>
    <table>
      <tr>
        <td>동전</td>
        <td>개수</td>
      </tr>
      <tr>
        <td>500</td>
        <td></td>
      </tr>
      <tr>
        <td>100</td>
        <td></td>
      </tr>
      <tr>
        <td>50</td>
        <td></td>
      </tr>
      <tr>
        <td>10</td>
        <td></td>
      </tr>
    </table>`;
  }

  /** Product Purchase */
  generateProductPurchaseMenuTemplate(model) {
    const inputsSectionTemplate = this.generateChargeInputSectionTemplate(model.chargeInputValue);
    const chargeAmountSectionTemplate = this.generateChargeAmountSectionTemplate();
    const productPurchaseListSectionTemplate = this.generateProductPurchaseListSectionTemplate();
    const changeCoinSectionTemplate = this.generateChangeCoinSectionTemplate();

    return `${inputsSectionTemplate}${chargeAmountSectionTemplate}${productPurchaseListSectionTemplate}${changeCoinSectionTemplate}`;
  }

  generateChargeInputSectionTemplate(inputValue) {
    return `<h3>금액 투입</h3><form>
    <input id="${DOM.CHARGE_INPUT}" type="number" value="${inputValue[DOM.CHARGE_INPUT]}"></input>
    <button id="${DOM.CHARGE_BUTTON}">투입하기</button>
    </form>`;
  }

  generateChargeAmountSectionTemplate() {
    return `<section id="${DOM.CHARGE_AMOUNT}"></section>`;
  }

  generateProductPurchaseListSectionTemplate() {
    return `<h3>구매할 수 있는 상품 현황</h3>
    <table>
      <tr>
        <td>동전</td>
        <td>개수</td>
        <td>수량</td>
        <td>구매</td>
      </tr>
    </table>`;
  }

  generateChangeCoinSectionTemplate() {
    return `<h3>잔돈</h3>
    <table>
      <tr>
        <td>동전</td>
        <td>개수</td>
      </tr>
      <tr>
        <td>500</td>
        <td></td>
      </tr>
      <tr>
        <td>100</td>
        <td></td>
      </tr>
      <tr>
        <td>50</td>
        <td></td>
      </tr>
      <tr>
        <td>10</td>
        <td></td>
      </tr>
    </table>`;
  }
}
export default VendingMachineView;
