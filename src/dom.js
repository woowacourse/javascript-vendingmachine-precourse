export const fixedMenu = `
<div>
    <h1> 🥤자판기🥤 </h1>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-purchase-menu">상품 구매</button>
</div>
<div id = 'container'></div>
`;

export const productAddMenu = `
<h3> 상품 추가하기 </h3>
<input type="text" id="product-name-input" placeholder="상품명"/>
<input type="number" id="product-price-input" placeholder="가격"/>
<input type="number" id="product-quantity-input" placeholder="수량"/>
<button id="product-add-button">추가하기</button>

<h3>상품 현황</h3>
<table id = 'product-table' border="1" width = '80%'>
    <th>상품명</th>
    <th>가격</th>
    <th>수량</th>
</tr>
</table>
`;

export const coinChargeMenu = `
<h3> 자판기 동전 충전하기 <h3>
<input type='number' id="vending-machine-charge-input" placeholder = '자판기가 보유할 금액'/>
<button id='vending-machine-charge-button'> 충전하기 </button>
<div> 보유 금액 : <span id='vending-machine-charge-amount'></span></div>

<h3> 자판기가 보유한 동전 <h2>
<table id = 'coin-table' border = '1' width = '80%'>
    <th> 동전 </th>
    <th> 개수 </th>
    <tr>
        <td>500원</td>
        <td id='vending-machine-coin-500-quantity'></td>    
    <tr>
        <td>100원</td>
        <td id='vending-machine-coin-100-quantity'></td>
    <tr>
        <td>50원</td>
        <td id='vending-machine-coin-50-quantity'></td>
    <tr>
        <td>10원</td>
        <td id='vending-machine-coin-10-quantity'></td>
    </tr>
</table>
`;

export const productPurchaseMenu = `
<h3> 금액 투입 </h3>
<input type = 'number' id ='charge-input' placeholder = '투입할 금액' />
<button id='charge-button'>충전하기</button>
<div> 보유 금액 : <span id = 'charge-amount'></span></div>

<h3> 구매할 수 있는 상품 현황 </h3>
<table id='product-purchase-table' border = '1' width = '80%'>
    <th> 상품명 </th>
    <th> 가격 </th>
    <th> 수량 </th>
</table>

<h3> 잔돈 </h3>
<button id = 'coin-return-button'> 반환하기 </button>
<table border = '1' width = '80%'>
    <th> 동전 </th>
    <th> 개수 </th>
    <tr>
        <td> 500원 </td>
        <td id = 'coin-500-quantity'></td>
    <tr>
        <td> 100원 </td>
        <td id = 'coin-100-quantity'></td>
    <tr>
        <td> 50원 </td>
        <td id = 'coin-50-quantity'></td>
    <tr>
        <td> 10원 </td>
        <td id = 'coin-10-quantity'></td>
    </tr>
</table>
`;
