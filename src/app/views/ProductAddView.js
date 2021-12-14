import { $ } from '../../lib/utils.js';
import { PRODUCT_LIST_TABLE_HEADER_TEMPLATE } from '../../template/constants.js';
import { DOM } from '../constants.js';

class ProductAddView {
  constructor(mainSection, productAddInputsValue, productList) {
    this.$app = mainSection;
    this.renderProductAddView(productAddInputsValue, productList);
  }

  renderProductAddView(productAddInputsValue, productList) {
    this.$app.innerHTML = this.generateProductAddMenuTemplate(productAddInputsValue, productList);
  }

  generateProductAddMenuTemplate(productAddInputsValue, productList) {
    const productAddSectionTemplate = this.createProductAddSectionTemplate(productAddInputsValue);
    const productListSectionTemplate = this.createProductListSectionTemplate(productList);

    return `${productAddSectionTemplate}${productListSectionTemplate}`;
  }

  createProductAddSectionTemplate(inputsValue) {
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

  createProductListSectionTemplate(productList) {
    return `<h3>상품 현황</h3>
      <table id="${DOM.PRODUCT_LIST_TABLE}">
        ${PRODUCT_LIST_TABLE_HEADER_TEMPLATE}
        ${this.createProductListTemplate(productList)}
      </table>
      `;
  }

  renderProductAdd(productList, productAddInputsValue) {
    $(DOM.PRODUCT_NAME_INPUT).value = productAddInputsValue[DOM.PRODUCT_NAME_INPUT];
    $(DOM.PRODUCT_PRICE_INPUT).value = productAddInputsValue[DOM.PRODUCT_PRICE_INPUT];
    $(DOM.PRODUCT_QUANTITY_INPUT).value = productAddInputsValue[DOM.PRODUCT_QUANTITY_INPUT];
    $(DOM.PRODUCT_LIST_TABLE).innerHTML = `${PRODUCT_LIST_TABLE_HEADER_TEMPLATE}
    ${this.createProductListTemplate(productList)}
    `;
  }

  createProductListTemplate(productList) {
    return `${productList
      .map(
        (product) => `
      <tr class="${DOM.PRODUCT_MANAGE_ITEM_CLASSNAME}">
        <td class="${DOM.PRODUCT_MANAGE_NAME_CLASSNAME}">${product.name}</td><td class="${DOM.PRODUCT_MANAGE_PRICE_CLASSNAME}">${product.price}</td><td class="${DOM.PRODUCT_MANAGE_QUANTITY_CLASSNAME}">${product.quantity}</td>
      </tr>
    `
      )
      .join('')}`;
  }
}
export default ProductAddView;
