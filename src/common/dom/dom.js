// Dom Selector
export const $ = (selector) => document.querySelector(selector);

// Header
export const header = `<div class="header">
<h2>🥤자판기🥤</h2>

<button id="product-add-menu">상품 관리</button>
<button id="vending-machine-manage-menu">잔돈 충전</button>
<button id="product-purchase-menu">상품 구매</button>
</div>`;

// Main

export const productMangeMenu = `<div class="product-add-menu">
<div>
  <h4>상품 추가하기</h4>
  <form>
    <input type="text" id="product-name-input" placeholder="상품명" />
    <input
      type="number"
      id="product-price-input"
      placeholder="가격"
    />
    <input
      type="number"
      id="product-quantity-input"
      placeholder="수량"
    />
    <button id="product-add-button">추가하기</button>
  </form>
</div>
<div>
  <h4>상품 현황</h4>
  <table>
    <thead>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>
</div>`;

export const vendingMachineManageMenu = `<div class="vending-machine-manage-menu">
<div>
  <h2>자판기 동전 충전하기</h2>
  <form>
    <input
      type="number"
      id="vending-machine-charge-input"
      maxlength="20"
      placeholder="자판기가 보유할 금액"
    />
    <button id="vending-machine-charge-button">충전하기</button>
  </form>
  <p id="vending-machine-charge-amount">보유 금액: 0원</p>
</div>
<div>
  <h2>자판기가 보유한 동전</h2>
  <table>
    <thead>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>500원</td>
        <td id="vending-machine-coin-500-quantity">0개</td>
      </tr>
      <tr>
        <td>100원</td>
        <td id="vending-machine-coin-100-quantity">0개</td>
      </tr>
      <tr>
        <td>50원</td>
        <td id="vending-machine-coin-50-quantity">0개</td>
      </tr>
      <tr>
        <td>10원</td>
        <td id="vending-machine-coin-10-quantity">0개</td>
      </tr>
    </tbody>
  </table>
</div>
</div>`;

export const productPurchaseMenu = `<div class="product-purchase-menu">
<div>
  <h4>금액 투입</h4>
  <form>
    <input
      type="number"
      id="charge-input"
      maxlength="20"
      placeholder="투입할 금액"
    />
    <button id="charge-button">투입하기</button>
    <p id="charge-amount">
      투입한 금액: 0원
    </p>
  </form>
</div>
<div>
  <h2>구매할 수 있는 상품 현황</h2>
  <table>
    <thead>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>
<div class="changes">
  <h3>잔돈</h3>
  <button id="coin-return-button">반환하기</button>
  <table>
    <thead>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>500원</td>
        <td id="coin-500-quantity">0개</td>
      </tr>
      <tr>
        <td>100원</td>
        <td id="coin-100-quantity">0개</td>
      </tr>
      <tr>
        <td>50원</td>
        <td id="coin-50-quantity">0개</td>
      </tr>
      <tr>
        <td>10원</td>
        <td id="coin-10-quantity">0개</td>
      </tr>
    </tbody>
  </table>
</div>
</div>`;

export const productListTable = `<tr class="product-manage-item">
<td class="product-manage-name"></td>
<td class="product-manage-price"></td>
<td class="product-manage-quantity"></td>
</tr>`;

export const productPurchaseTable = `
<tr class="product-purchase-item">

<td class="product-purchase-name" data-product-name=""></td>
<td class="product-purchase-price" data-product-price=""></td>
<td class="product-purchase-quantity" data-product-quantity=''></td>
<td><button class="purchase-button">구매하기</button></td>

</tr>`;
