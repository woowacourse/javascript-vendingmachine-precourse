export const mainTemplate = `
  <header>
    <h1>🥤자판기🥤</h1>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-purchase-menu">상품 구매</button>
  </header>
  <main></main>
`;

export const productAddTemplate = `
    <section id="product-add-tab">
    <form>
        <h3>상품 추가하기</h3>
        <input id="product-name-input" type="text" placeholder="상품명" />
        <input id="product-price-input" type="number" placeholder="가격" />
        <input id="product-quantity-input" type="number" placeholder="수량" />
        <button id="product-add-button">추가하기</button>
    </form>
    <h3>상품 현황</h3>
    <table style="border: 1px solid black; border-collapse: collapse; width: 500px">
        <thead>
        <tr>
            <th style="border: 1px solid black; padding: 10px;">상품명</th>
            <th style="border: 1px solid black; padding: 10px;">가격</th>
            <th style="border: 1px solid black; padding: 10px;">수량</th>
        </tr>
        </thead>
        <tbody id="product-list">
        </tbody>
    </table>
    </section>
  `;

export const productPurchaseTemplate = `
  <section id="product-purchase-tab">
    <form>
      <h3>금액 투입</h3>
      <input id="charge-input" type="number" placeholder="투입할 금액" />
      <button id="charge-button">투입하기</button>
      <div style="margin-top:15px">투입한 금액: <span id="charge-amount">0</span>원</div>
    </form>
    <h3>구매할 수 있는 상품 현황</h3>
    <table style="border-collapse: collapse; width: 500px">
      <thead>
        <tr>
          <th style="border: 1px solid black; padding: 10px;">상품명</th>
          <th style="border: 1px solid black; padding: 10px;">가격</th>
          <th style="border: 1px solid black; padding: 10px;">수량</th>
          <th style="border: 1px solid black; padding: 10px;">구매</th>
        </tr>
      </thead>
      <tbody id="purchase-list">
      </tbody>
    </table>
    <h3>잔돈</h3>
    <button id="coin-return-button">반환하기</button>
    <table style="border: 1px solid black; border-collapse: collapse; width: 200px">
      <thead>
        <tr>
          <th style="border: 1px solid black; padding: 10px;">동전</th>
          <th style="border: 1px solid black; padding: 10px;">개수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid black; text-align:center; padding: 10px;">500원</td>
          <td id="coin-500-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; text-align:center; padding: 10px;">100원</td>
          <td id="coin-100-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; text-align:center; padding: 10px;">50원</td>
          <td id="coin-50-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; text-align:center; padding: 10px;">10원</td>
          <td id="coin-10-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
        </tr>
      </tbody>
    </table>
  </section>  
`;

export const vendingMachineManageTemplate = `
    <section id="vending-machine-manage-tab">
    <form>
        <h3>자판기 동전 충전하기</h3>
        <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액" />
        <button id="vending-machine-charge-button">충전하기</button>
        <div style="margin-top:15px">보유 금액: <span id="vending-machine-charge-amount">0</span>원</div>
    </form>
    <h3 style="margin-top:50px">자판기가 보유한 동전</h3>
    <table style="border: 1px solid black; border-collapse: collapse; width: 200px">
        <thead>
        <tr>
            <th style="border: 1px solid black; text-align:center; padding: 10px;">동전</th>
            <th style="border: 1px solid black; text-align:center; padding: 10px;">개수</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td style="border: 1px solid black; text-align:center; padding: 10px;">500원</td>
            <td id="vending-machine-coin-500-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align:center; padding: 10px;">100원</td>
            <td id="vending-machine-coin-100-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align:center; padding: 10px;">50원</td>
            <td id="vending-machine-coin-50-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align:center; padding: 10px;">10원</td>
            <td id="vending-machine-coin-10-quantity"  style="border: 1px solid black; text-align:center; padding: 10px;">0개</td>
        </tr>
        </tbody>
    </table>
    </section>
  `;

export const productAddInsertTable = (items) => {
  return items
    .map(
      (item) => `
  <tr class="product-manage-item">
    <td class="product-manage-name" style="border: 1px solid black; text-align:center; padding: 10px;">${item.name}</td>
    <td class="product-manage-price" style="border: 1px solid black; text-align:center; padding: 10px;">${item.price}</td>
    <td class="product-manage-quantity" style="border: 1px solid black; text-align:center; padding: 10px;">${item.quantity}</td>
  </tr>`
    )
    .join("");
};

export const productPurchaseInsertTable = (items) => {
  return items
    .map(
      (item) => `
    <tr class="product-purchase-item">
        <td class="product-purchase-name" data-product-name="${item.name}" style="border: 1px solid black; text-align:center; padding: 10px;">${item.name}</td>
        <td class="product-purchase-price" data-product-price="${item.price}" style="border: 1px solid black; text-align:center; padding: 10px;">${item.price}</td>
        <td class="product-purchase-quantity" data-product-quantity="${item.quantity}" style="border: 1px solid black; text-align:center; padding: 10px;">${item.quantity}</td>
        <td style="border: 1px solid black; text-align:center; padding: 10px;"><button class="purchase-button" >구매하기</button></td>
    </tr>`
    )
    .join("");
};
