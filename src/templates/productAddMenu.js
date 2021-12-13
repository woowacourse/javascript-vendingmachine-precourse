import { createTheadTableDataTemplate } from './common.js';

import SELECTOR from '../constants/selector.js';
import STYLE from '../constants/style.js';

const createTbodyTableDataTemplate = (text, className) => `
  <td class="${className}" style="${STYLE.tableBodyData}">${text}</td>
`;

const createProductItemTemplate = (name, price, quantity) => `
  <tr class="${SELECTOR.productManageItemClass}">
    ${createTbodyTableDataTemplate(name, SELECTOR.productManageNameClass)}
    ${createTbodyTableDataTemplate(price, SELECTOR.productManagePriceClass)}
    ${createTbodyTableDataTemplate(quantity, SELECTOR.productManageQuantityClass)}
  </tr>
`;

export const createProductAddFormTemplate = () => `
  <h3>상품 추가하기</h3>
  <div>
    <input placeholder="상품명" id="${SELECTOR.productNameInputId}" />
    <input type="number" placeholder="가격" id="${SELECTOR.productPriceInputId}" />
    <input type="number" placeholder="수량" id="${SELECTOR.productQuantityInputId}" />
    <button id="${SELECTOR.productAddButtonId}">추가하기</button>
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
  <table style="${STYLE.table}">
    <thead>
      <tr>
        ${createTheadTableDataTemplate('상품명')}
        ${createTheadTableDataTemplate('가격')}
        ${createTheadTableDataTemplate('수량')}
      </tr>
    </thead>
    <tbody id="${SELECTOR.productTableBodyId}">
      ${createProductTableBodyTemplateWithItem([])}
    </tbody>
  </table>
`;
