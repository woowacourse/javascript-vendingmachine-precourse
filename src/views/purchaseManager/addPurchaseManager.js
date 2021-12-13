const addCharge = () => {
  return `
    <input id="charge-input" type="number" placeholder="투입할 금액" />
    <button id="charge-button">투입하기</button>
    <br />
    <br />
    <div id="charge-amount-div"></div>
    <br />
  `;
};

const addPurchaseManager = () => {
  const $app = document.getElementById("app");

  $app.innerHTML += `
    <div id="purchase-manager" hidden>
      <h3>금액 투입</h3>
      ${addCharge()}
      <h3>구매할 수 있는 상품 현황</h3>
      <table id="able-buy-product-table"></table>
      <h3>잔돈</h3>
      <button id="coin-return-button">반환하기</button>
      <table id="return-coin-table" border="1"></table>
    </div>
  `;
};

export { addPurchaseManager };
