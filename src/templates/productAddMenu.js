import { createTheadTableDataTemplate } from './common.js';

import Selector from '../constants/selector.js';
import Style from '../constants/style.js';
import { PRODUCT_ADD_TAB } from '../constants/element.js';

export const createTitleTemplate = () => `
  <h2>${PRODUCT_ADD_TAB}</h2>
`;

const createTbodyTableDataTemplate = (text, className) => `
  <td class="${className}" Style="${Style.tableBodyData}">${text}</td>
`;

const createProductItemTemplate = (name, price, quantity) => `
  <tr class="${Selector.productManageItemClass}">
    ${createTbodyTableDataTemplate(name, Selector.productManageNameClass)}
    ${createTbodyTableDataTemplate(price, Selector.productManagePriceClass)}
    ${createTbodyTableDataTemplate(quantity, Selector.productManageQuantityClass)}
  </tr>
`;

export const createProductAddFormTemplate = () => `
  <h3>상품 추가하기</h3>
  <div>
    <input placeholder="상품명" id="${Selector.productNameInputId}" />
    <input placeholder="가격" id="${Selector.productPriceInputId}" />
    <input placeholder="수량" id="${Selector.productQuantityInputId}" />
    <button id="${Selector.productAddButtonId}">추가하기</button>
  </div>
`;

export const createProductTableBodyTemplateWithItem = productItems => `
  ${productItems
    .map(item =>
      createProductItemTemplate(item.productName, item.productPrice, item.productQuantity),
    )
    .join('')}
`;

export const createProductTableTemplate = () => `
  <h3>상품 현황</h3>
  <table Style="${Style.table}">
    <thead>
      <tr>
        ${createTheadTableDataTemplate('상품명')}
        ${createTheadTableDataTemplate('가격')}
        ${createTheadTableDataTemplate('수량')}
      </tr>
    </thead>
    <tbody id="${Selector.productTableBodyId}">
      ${createProductTableBodyTemplateWithItem([])}
    </tbody>
  </table>
`;
