const tabMenus = `
      <div>
        <h1>🥤자판기🥤</h1>
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu" >잔돈 충전</button>
        <button id="product-purchase-menu" style=>상품 구매</button>
      </div>
      <div id="tab"></div>
`;

const tab1 = `
<div class="tab1">
    <h2>상품 추가하기</h2>
    <input placeholder="상품명" /><input placeholder="수량" /><input
        placeholder="가격"
    /><button id="btn">추가하기</button>
    <h2>상품 현황</h2>
    <table>
        <thead>
        <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
        </tr>
        </thead>
        <tbody id="tabAddTbody"></tbody>
    </table>
</div>
`;

const tab2 = `
<div class="tab2">
    <h2>자판기 동전 충전하기</h2>
</div>
`;

const tab3 = `
<div class="tab3">
    <h2>금액 투입</h2>
</div>
`;

export { tabMenus, tab1, tab2, tab3 };
