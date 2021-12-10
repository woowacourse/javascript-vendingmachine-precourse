const PRODUCT_ADD_TITLE = '상품 추가하기';
const PRODUCT_LIST_TITLE = '상품 현황';

const PRODUCT_NAME_TITLE = '상품명';
const PRODUCT_PRICE_TITLE = '가격';
const PRODUCT_QUANTITY_TITLE = '수량';

const PRODUCT_LIST_TABLE_ID = 'product-list-table';

export const PRODUCT_NAME_INPUT_ID = 'product-name-input';
export const PRODUCT_PRICE_INPUT_ID = 'product-price-input';
export const PRODUCT_QUANTITY_INPUT_ID = 'product-quantity-input';
export const PRODUCT_ADD_BUTTON_ID = 'product-add-button';

function renderProductAddInput($productAdd) {
  const $inputContainer = document.createElement('div');

  $inputContainer.innerHTML = `
    <h3>${PRODUCT_ADD_TITLE}</h3>
    <input id="${PRODUCT_NAME_INPUT_ID}" type="text" placeholder="상품명"></input>
    <input id="${PRODUCT_PRICE_INPUT_ID}" type="number" placeholder="가격"></input>
    <input id="${PRODUCT_QUANTITY_INPUT_ID}" type="number" placeholder="수량"></input>
    <button id="${PRODUCT_ADD_BUTTON_ID}">추가하기</button>
  `;
  $productAdd.append($inputContainer);
}

function renderProductAddList($productAdd) {
  const $listContainer = document.createElement('div');

  $listContainer.innerHTML = `
    <h3>${PRODUCT_LIST_TITLE}</h3>
    <table id="${PRODUCT_LIST_TABLE_ID}" bgcolor="black" width="380" height="40">
      <tr align="center" bgcolor="white">
        <td align="center">${PRODUCT_NAME_TITLE}</td>
        <td align="center">${PRODUCT_PRICE_TITLE}</td>
        <td align="center">${PRODUCT_QUANTITY_TITLE}</td>
      </tr>
    </table>
  `;
  $productAdd.append($listContainer);
}

export default function initProductAdd($appDiv) {
  const $productAdd = document.createElement('div');

  renderProductAddInput($productAdd);
  renderProductAddList($productAdd);
  $appDiv.append($productAdd);
}
