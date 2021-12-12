import { CLASS, ID } from '../constants/selectors.js';

const productAddTemplate = {
  main: `
  <section>
    <h3>상품 추가하기</h3>
    <form>
      <input id="${ID.PRODUCT_ADD.NAME_INPUT}" placeholder="상품명"/>
      <input id="${ID.PRODUCT_ADD.PRICE_INPUT}" placeholder="가격" type="number"/>
      <input id="${ID.PRODUCT_ADD.QUANTITY_INPUT}" placeholder="수량" type="number"/>
      <button id="${ID.PRODUCT_ADD.BUTTON}">추가하기</button>
    </form>
  </section><br />
  <section>
    <h3>상품 현황</h3>
    <table id="${ID.PRODUCT_MANAGE.TABLE}">
      <thead>
        <tr>
          <th>상품명</th><th>가격</th><th>수량</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </section>
  `,
  tableItem: (product) => `
  <tr class="${CLASS.PRODUCT_MANAGE.ITEM}">
    <td class="${CLASS.PRODUCT_MANAGE.NAME}">${product.name}</td>
    <td class="${CLASS.PRODUCT_MANAGE.PRICE}">${product.price}</td>
    <td class="${CLASS.PRODUCT_MANAGE.QUANTITY}">${product.quantity}</td>
  </tr>
  `,
};

export default productAddTemplate;
