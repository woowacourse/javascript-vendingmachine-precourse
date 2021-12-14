import { CLASS, ID } from '../constants.js';

const getProductPurchaseListTemplate = (productAddMenu) => {
  return `
  ${productAddMenu
    .map(
      (item) => `
        <tr class=${CLASS.PRODUCT_PURCHASE_ITEM}>
          <td data-product-name=${item.name} class=${CLASS.PRODUCT_PURCHASE_NAME}>${item.name}</td>
          <td data-product-price=${item.price} class=${CLASS.PRODUCT_PURCHASE_PRICE}>${item.price}</td>
          <td data-product-quantity=${item.quantity} class=${CLASS.PRODUCT_PURCHASE_QUANTITY}>${item.quantity}</td>
          <td><button class=${CLASS.PURCHASE_BUTTON}>구매하기</button></td>
        </tr>
      `
    )
    .join('')}
  `;
};

export const getProductPurchaseTemplate = (productAddMenu, productPurchaseMenu) => {
  const productPurchaseList = getProductPurchaseListTemplate(productAddMenu);
  const { chargeAmount, coinList } = productPurchaseMenu;

  return `
    <section>
      <h4>금액 투입</h4>
      <form id=${ID.CHARGE_FORM}>
        <input type="number" id=${ID.CHARGE_INPUT} placeholder="투입할 금액"/>
        <button id=${ID.CHARGE_BUTTON}>충전하기</button>
      </form>
      <p>투입한 금액: <span id=${ID.CHARGE_AMOUNT}>${chargeAmount}</span></p>
    </section>
    <section>
      <h4>구매할 수 있는 상품 현황</h4>
      <table>
        <tr><th>상품명</th><th>가격</th><th>수량</th><th>구매</th></tr>
        ${productPurchaseList}
      </table>
    </section>
    <section>
      <h4>잔돈</h4>
      <button id=${ID.COIN_RETURN_BUTTON}>반환하기</button>
      <table id=${ID.COIN_RETURN_TABLE}>
        <tr><th>동전</th><th>개수</th></tr>
        <tr><th>500원</th><td id=${ID.COIN_500_QUANTITY}>${coinList['500']}개</td></tr>
        <tr><th>100원</th><td id=${ID.COIN_100_QUANTITY}>${coinList['100']}개</td></tr>
        <tr><th>50원</th><td id=${ID.COIN_50_QUANTITY}>${coinList['50']}개</td></tr>
        <tr><th>10원</th><td id=${ID.COIN_10_QUANTITY}>${coinList['10']}개</td></tr>
      </table>
    </section>
`;
};

export const getCoinReturnListTemplate = (coinList) => {
  return `
    <tr><th>동전</th><th>개수</th></tr>
    <tr><th id=${ID.COIN_500_QUANTITY}>500원</th><td>${coinList['500']}개</td></tr>
    <tr><th id=${ID.COIN_100_QUANTITY}>100원</th><td>${coinList['100']}개</td></tr>
    <tr><th id=${ID.COIN_50_QUANTITY}>50원</th><td>${coinList['50']}개</td></tr>
    <tr><th id=${ID.COIN_10_QUANTITY}>10원</th><td>${coinList['10']}개</td></tr>
  `;
};
