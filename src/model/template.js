export const headerTab = `
<div>
    <h1>🥤자판기🥤</h1>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-purchase-menu">상품 구매</button>
</div>
<div id="container"></div>
`;

export const productAddTab = `
<h2>상품 추가하기</h2>
<input type="text" id="product-name-input" placeholder="상품명"/>
<input type="number" id="product-price-input" placeholder="가격"/>
<input type="number" id="product-quantity-input" placeholder="수량"/>
<button id="product-add-button">추가하기</button>

<h2>상품 현황</h2>
<table border="1">
    <th>상품명</th>
    <th>가격</th>
    <th>수량</th>
</table>
`;

export const vendingMachineManageTab = `
<h2>자판기 동전 충전하기</h2>
<input type="number" placeholder="자판기가 보유할 금액" id="vending-machine-charge-input"/>
<button id="vending-machine-charge-button">충전하기</button>
<div>보유 금액: <span id="vending-machine-charge-amount"></span></div>

<h2>자판기가 보유한 동전</h2>
<table border="1">
    <th>동전</th>
    <th>개수</th>
    <tr>
        <td>500원</td>
        <td id="vending-machine-coin-500-quantity"></td>
    </tr>
    <tr>
        <td>100원</td>
        <td id="vending-machine-coin-100-quantity"></td>
    </tr>
    <tr>
        <td>50원</td>
        <td id="vending-machine-coin-50-quantity"></td>
    </tr>
    <tr>
        <td>10원</td>
        <td id="vending-machine-coin-10-quantity"></td>
    </tr>
</table>
`;

export const productPurchaseTab = `
<h2>금액 투입</h2>
<input type="number" placeholder="투입할 금액" id="charge-input"/>
<button id="charge-button">투입하기</button>
<div>투입한 금액: <span id="charge-amount"></span></div>

<h2>구매할 수 있는 상품 현황</h2>
<table border="1">
    <tbody>
    </tbody>
</table>

<h2>잔돈</h2>
<button id="coin-return-button">반환하기</button>
<table border="1">
    <th>동전</th>
    <th>개수</th>
    <tr>
        <td>500원</td>
        <td id="coin-500-quantity"></td>
    </tr>
    <tr>
        <td>100원</td>
        <td id="coin-100-quantity"></td>
    </tr>
    <tr>
        <td>50원</td>
        <td id="coin-50-quantity"></td>
    </tr>
    <tr>
        <td>10원</td>
        <td id="coin-10-quantity"></td>
    </tr>
</table>
`;

export const productAddTableRow = product => `
<tr class="product-manage-item">
    <td class="product-manage-name">${product.name}</td>
    <td class="product-manage-price">${product.price}</td>
    <td class="product-manage-quantity">${product.quantity}</td>
</tr>
`;

export const productPurchaseTableHeader = `
<th>상품명</th>
<th>가격</th>
<th>수량</th>
<th>구매</th>
`;

export const productPurchaseTableRow = product => `
<tr class="product-purchase-item">
    <td class="product-purchase-name" data-product-name=${product.name}>${product.name}</td>
    <td class="product-purchase-price" data-product-price=${product.price}>${product.price}</td>
    <td class="product-purchase-quantity" data-product-quantity=${product.quantity}>${product.quantity}</td>
    <td><button class="purchase-button">구매하기</button></td>
</tr>
`;
