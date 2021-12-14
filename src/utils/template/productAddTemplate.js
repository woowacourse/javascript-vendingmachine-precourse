import { CLASS, ID } from '../constants.js';

const productManageItemTemplate = (productNameInput, productPriceInput, productQuantityInput) => {
  return `
    <tr class=${CLASS.PRODUCT_MANAGE_ITEM}>
      <td class=${CLASS.PRODUCT_MANAGE_NAME}>${productNameInput}</td>
      <td class=${CLASS.PRODUCT_MANAGE_PRICE}>${productPriceInput}</td>
      <td class=${CLASS.PRODUCT_MANAGE_QUANTITY}>${productQuantityInput}</td>
    </tr>
  `;
};

export const getProductMangeListTemplate = (productAddMenu) => {
  return `
    <tr>
      <th>상품명</th>
      <th>가격</th>
      <th>수량</th>
    </tr>
    ${productAddMenu
      .map((item) => productManageItemTemplate(item.name, item.price, item.quantity))
      .join('')}
    `;
};

export const getProduceAddTemplate = (productAddMenu) => {
  return `<section>
      <h4>상품 추가하기</h4>
      <form id=${ID.PRODUCT_ADD_FORM}>
        <input id=${ID.PRODUCT_NAME_INPUT} placeholder="상품명"/>
        <input type="number" id=${ID.PRODUCT_PRICE_INPUT} placeholder="가격"/>
        <input type="number" id=${ID.PRODUCT_QUANTITY_INPUT} placeholder="수량"/>
        <button id=${ID.PRODUCT_ADD_BUTTON}>추가하기</button>
      </form>
    </section>
    <section>
      <h4>상품 현황</h4>
      <table id=${ID.PRODUCT_STATUS_TABLE}>
        <tr><th>상품명</th><th>가격</th> <th>수량</th></tr>
        ${productAddMenu
          .map((item) => productManageItemTemplate(item.name, item.price, item.quantity))
          .join('')}
      </table>
    </section>`;
};
