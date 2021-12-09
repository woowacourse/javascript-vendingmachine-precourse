export const DOM = Object.freeze({
  APP: 'app',
  /** TAB */
  TAB_MENU_SECTION: 'tab-menu-section',
  PRODUCT_ADD_MENU: 'product-add-menu',
  VENDING_MACHINE_MANAGE_MENU: 'vending-machine-manage-menu',
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
  MAIN_SECTION: 'main-section',
  /** PRODUCT_ADD_MENU */
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BUTTON: 'product-add-button',

  /** VENDING MACHINE CHARGE MENU */
  VENDING_MACHINE_CHARGE_INPUT: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_BUTTON: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending-machine-charge-amount',
  VENDING_MACHINE_COIN_500_QUANTITY: 'vending-machine-coin-500-quantity',
  VENDING_MACHINE_COIN_100_QUANTITY: 'vending-machine-coin-100-quantity',
  VENDING_MACHINE_COIN_50_QUANTITY: 'vending-machine-coin-50-quantity',
  VENDING_MACHINE_COIN_10_QUANTITY: 'vending-machine-coin-10-quantity',

  /** PRODUCT CHARGE MENU */
  CHARGE_INPUT: 'charge-input',
  CHARGE_BUTTON: 'charge-button',
  CHARGE_AMOUNT: 'charge-amount',
  COIN_RETURN_BUTTON: 'coin-return-button',
  COIN_500_QUANTITY: 'coin-500-quantity',
  COIN_100_QUANTITY: 'coin-100-quantity',
  COIN_50_QUANTITY: 'coin-50-quantity',
  COIN_10_QUANTITY: 'coin-10-quantity',
});
export const TAB = Object.freeze({
  PRODUCT_ADD_MENU: '상품 관리',
  VENDING_MACHINE_MANAGE_MENU: '잔돈 충전',
  PRODUCT_PURCHASE_MENU: '상품 구매',
});
export const PLAIN_TEXT = '';

export const TEMPLATE = {
  '상품 관리': `<h3>상품 추가하기</h3><form>
  <input id="${DOM.PRODUCT_NAME_INPUT}" placeholder="상품명"></input>
  <input id="${DOM.PRODUCT_PRICE_INPUT}" type="number" placeholder="가격"></input>
  <input id="${DOM.PRODUCT_QUANTITY_INPUT}" type="number" placeholder="수량"></input>
  <button id="${DOM.PRODUCT_ADD_BUTTON}">추가하기</button>
  </form>
  <h3>상품 현황</h3>
  <table>
    <tr>
      <td>상품명</td>
      <td>가격</td>
      <td>수량</td>
    </tr>
  </table>
`,
  '잔돈 충전': `<h3>자판기 동전 충전하기</h3><form>
<input id="${DOM.VENDING_MACHINE_CHARGE_INPUT}" type="number" placeholder="자판기가 보유할 금액"></input>
<button id="${DOM.VENDING_MACHINE_CHARGE_BUTTON}">충전하기</button>
</form>
<section id="${DOM.VENDING_MACHINE_CHARGE_AMOUNT}">
<h3>자판기가 보유한 동전</h3>
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
</table>

`,
  '상품 구매': `<h3>금액 투입</h3><form>
<input id="${DOM.CHARGE_INPUT}" type="number"></input>
<button id="${DOM.CHARGE_BUTTON}">투입하기</button>
</form>
<section id="${DOM.CHARGE_AMOUNT}"></section>
<h3>구매할 수 있는 상품 현황</h3>
<table>
  <tr>
    <td>동전</td>
    <td>개수</td>
    <td>수량</td>
    <td>구매</td>
  </tr>
</table>
<h3>잔돈</h3>
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
</table>
`,
};
