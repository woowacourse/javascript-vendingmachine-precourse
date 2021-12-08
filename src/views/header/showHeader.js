const showHeader = () => {
  const $app = document.getElementById("app");

  $app.innerHTML = `
    <h2>🥤 자판기 🥤</h2>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-purchase-menu">상품 구매</button>
  `;
};

export { showHeader };
