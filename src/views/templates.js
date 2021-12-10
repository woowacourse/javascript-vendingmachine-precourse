const templates = {
  commonHTML: `
    <h1>🥤 자판기 🥤</h1>
    <nav id="tab-menu">
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
    </nav>
    <div id="component"></div>
    `,

  productAddHTML: `
    <div id="product-add-component">
        <h3>상품 추가하기</h3>
        <form>
            <input type="text" id="product-name-input" placeholder="상품명" />
            <input type="number" id="product-price-input" placeholder="가격" />
            <input type="number" id="product-quantity-input" placeholder="수량" />
            <button id="product-add-button">추가하기</button>
        </form>
        <h3>상품 현황</h3>
        <table border="1" style="width:400px; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="padding:10px;">상품명</th>
                    <th style="padding:10px;">가격</th>
                    <th style="padding:10px;">수량</th>
                </tr>
            </thead>
            <tbody id="product-inventory">
            </tbody>
        </table>
    </div>`,

  vendingMachineManageHTML: `
    <div id="vending-machine-manage-component">
        <h3>자판기 동전 충전하기</h3>
    </div>`,

  productPurchaseHTML: `
      <div id="product-purchase-component">
          <h3>금액 투입</h3>
      </div>`,
};

export default templates;
