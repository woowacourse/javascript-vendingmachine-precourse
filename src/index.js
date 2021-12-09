const $app = document.getElementById('app');

const $tabMenus = `
      <div>
        <h1>🥤자판기🥤</h1>
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
      </div>
`;

$app.insertAdjacentHTML('afterbegin', $tabMenus);
