export function tabButtonTemplete() {
  const divFragment = document.createElement('div');
  divFragment.innerHTML = `
    <div id="product-menu">
      <button id="product-add-menu">상품 관리</button>
      <button id="vending-machine-manage-menu">잔돈 충전</button>
      <button id="product-purchase-menu">상품 구매</button>
    </div>
  `;

  return divFragment;
} 