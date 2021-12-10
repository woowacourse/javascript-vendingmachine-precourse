import SELECTOR from '../constants/selector.js';
import { PRODUCT_ADD_TAB } from '../constants/element.js';
import { createTheadTableDataTemplate } from './common.js';

export const createTitleTemplate = () => `
  <h2>${PRODUCT_ADD_TAB}</h2>
`;

const createTbodyTableDataTemplate = (text, id) => `
  <td id="${id}" style="border: 1px solid black;padding: 10px 50px;">${text}</td>
`;

const createProductItemTemplate = (name, price, quantity) => `
  <tr id="${SELECTOR.productManageItemClass}">
    ${createTbodyTableDataTemplate(name, SELECTOR.productManageNameClass)}
    ${createTbodyTableDataTemplate(price, SELECTOR.productManagePriceClass)}
    ${createTbodyTableDataTemplate(quantity, SELECTOR.productManageQuantityClass)}
  </tr>
`;

export const createProductAddFormTemplate = () => `
  <h3>상품 추가하기</h3>
  <div>
    <input placeholder="상품명" id="${SELECTOR.productNameInputId}" />
    <input placeholder="가격" id="${SELECTOR.productPriceInputId}" />
    <input placeholder="수량" id="${SELECTOR.productQuantityInputId}" />
    <button id="${SELECTOR.productAddButtonId}">추가하기</button>
  </div>
`;

export const createProductTableTemplate = () => `
  <h3>상품 현황</h3>
  <table style="border: 1px solid black;border-collapse: collapse;">
    <thead>
      <tr>
        ${createTheadTableDataTemplate('상품명')}
        ${createTheadTableDataTemplate('가격')}
        ${createTheadTableDataTemplate('수량')}
      </tr>
    </thead>
    <tbody>
      ${createProductItemTemplate()}
    </tbody>
  </table>
`;
