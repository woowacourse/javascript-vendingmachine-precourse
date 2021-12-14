const $app = document.getElementById("app");

export function initialViews() {
  $app.innerHTML = `
    <h2>🥤 자판기 🥤</h2>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-purchase-menu">상품 구매</button>
  `;
  productManagementView();
  productPurchaseView();
  changeChargeView();
};

export function productManagementView() {
  $app.innerHTML += `
    <div id="product-manager" hidden>
      <h3>상품 추가하기</h3>
      <form>
        <input id="product-name-input" placeholder="상품명" />
        <input id="product-price-input" type="number" placeholder="가격" />
        <input id="product-quantity-input" type="number" placeholder="수량" />
        <button id="product-add-button">추가하기</button>
      </form>

      <h3>상품 현황</h3>
      <table id="product-table"></table>
    </div>
  `;
}


export function changeChargeView() {
  $app.innerHTML += `
    <div id="charge-manager" hidden>
      <h3>자판기 동전 충전하기</h3>
      <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액" />
      <button id="vending-machine-charge-button">충전하기</button>
      <div id="machine-charge-amount-div"></div>
    
      <h3>자판기가 보유한 동전</h3>
      <table id="vending-machine-coin-table"></table>
    </div>
  `;
}


export function productPurchaseView() {
  $app.innerHTML += `
    <div id="purchase-manager" hidden>
      <h3>금액 투입</h3>
      <input id="charge-input" type="number" placeholder="투입할 금액" />
      <button id="charge-button">투입하기</button>
      <div id="charge-amount-div"></div>

      <h3>구매할 수 있는 상품 현황</h3>
      <table id="able-buy-product-table"></table>
      
      <h3>잔돈</h3>
      <button id="coin-return-button">반환하기</button>
      <table id="return-coin-table"></table>
    </div>
  `;
}