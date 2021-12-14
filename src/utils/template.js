export const productManageItemTemplate = (
  productNameInput,
  productPriceInput,
  productQuantityInput
) => {
  return `
    <tr class="product-manage-item">
      <td class="product-manage-name">${productNameInput}</td>
      <td class="product-manage-price">${productPriceInput}</td>
      <td class="product-manage-quantity">${productQuantityInput}</td>
    </tr>
  `;
};

export const getCoinReturnListTemplate = (coinList) => {
  return `
    <tr>
      <th>동전</th>
      <th>개수</th>
    </tr>
    <tr>
      <th id="coin-500-quantity">500원</th>
      <td>${coinList['500']}개</td>
    </tr>
    <tr>
      <th id="coin-100-quantity">100원</th>
      <td>${coinList['100']}개</td>
    </tr>
    <tr>
      <th id="coin-50-quantity">50원</th>
      <td>${coinList['50']}개</td>
    </tr>
    <tr>
      <th id="coin-10-quantity">10원</th>
      <td>${coinList['10']}개</td>
    </tr>
  `;
};

export const getProduceAddText = (productAddMenu) => {
  return `
    <section>
      <h4>상품 추가하기</h4>
      <form id="product-add-form">
        <input id="product-name-input" placeholder="상품명"/>
        <input type="number" id="product-price-input" placeholder="가격"/>
        <input type="number" id="product-quantity-input" placeholder="수량"/>
        <button id="product-add-button">추가하기</button>
      </form>
    </section>
    <section>
      <h4>상품 현황</h4>
      <table id="product-status-table">
        <tr>
          <th>상품명</th>
          <th>가격</th> 
          <th>수량</th>
        </tr>
        ${productAddMenu
          .map((item) => productManageItemTemplate(item.name, item.price, item.quantity))
          .join('')}
      </table>
    </section>
  `;
};

export const getVendingMachineCoinListTemplate = (coinList) => {
  return `
    <tr>
      <th>동전</th>
      <th>개수</th>
    </tr>
    <tr>
      <th >500원</th>
      <td id="vending-machine-coin-500-quantity">${coinList['500']}개</td>
    </tr>
    <tr>
      <th>100원</th>
      <td id="vending-machine-coin-100-quantity">${coinList['100']}개</td>
    </tr>
    <tr>
      <th>50원</th>
      <td id="vending-machine-coin-50-quantity">${coinList['50']}개</td>
    </tr>
    <tr>
      <th>10원</th>
      <td id="vending-machine-coin-10-quantity">${coinList['10']}개</td>
    </tr>
  `;
};

export const getVendingMachineManageText = (vendingMachineManageMenu) => {
  return `
    <section>
      <h4>자판기 동전 충전하기</h4>
      <form id="vending-machine-charge-form">
        <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액"/>
        <button id="vending-machine-charge-button">충전하기</button>
      </form>
      <p>보유 금액: <span id="vending-machine-charge-amount">${vendingMachineManageMenu.chargeAmount}</span></p>
    </section>
    <section>
      <h4>자판기가 보유한 동전</h4>
      <table id="vending-machine-coin-list">
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
        <tr>
          <th>500원</th>
          <td id="vending-machine-coin-500-quantity">${vendingMachineManageMenu.coinList['500']}개</td>
        </tr>
        <tr>
          <th>100원</th>
          <td id="vending-machine-coin-100-quantity">${vendingMachineManageMenu.coinList['100']}개</td>
        </tr>
        <tr>
          <th>50원</th>
          <td id="vending-machine-coin-50-quantity">${vendingMachineManageMenu.coinList['50']}개</td>
        </tr>
        <tr>
          <th>10원</th>
          <td id="vending-machine-coin-10-quantity">${vendingMachineManageMenu.coinList['10']}개</td>
        </tr>
      </table>
    </section>
  `;
};

export const getProductPurchaseList = (productAddMenu) => {
  return `
  ${productAddMenu
    .map(
      (item) => `
        <tr class="product-purchase-item">
          <td data-product-name=${item.name} class="product-purchase-name">${item.name}</td>
          <td data-product-price=${item.price} class="product-purchase-price">${item.price}</td>
          <td data-product-quantity=${item.quantity} class="product-purchase-quantity">${item.quantity}</td>
          <td><button class="purchase-button">구매하기</button></td>
        </tr>
      `
    )
    .join('')}
  `;
};

export const getProductPurchaseText = (productAddMenu, productPurchaseMenu) => {
  const productPurchaseList = getProductPurchaseList(productAddMenu);

  return `
    <section>
      <h4>금액 투입</h4>
      <form id="charge-form">
        <input type="number" id="charge-input" placeholder="투입할 금액"/>
        <button id="charge-button">충전하기</button>
      </form>
      <p>투입한 금액: <span id="charge-amount">${productPurchaseMenu.chargeAmount}</span></p>
    </section>
    <section>
      <h4>구매할 수 있는 상품 현황</h4>
      <table>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
          <th>구매</th>
        </tr>
        ${productPurchaseList}
      </table>
    </section>
    <section>
      <h4>잔돈</h4>
      <button id="coin-return-button">반환하기</button>
      <table id="coin-return-table">
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
        <tr>
          <th>500원</th>
          <td  id="coin-500-quantity">${productPurchaseMenu.coinList['500']}개</td>
        </tr>
        <tr>
          <th>100원</th>
          <td id="coin-100-quantity">${productPurchaseMenu.coinList['100']}개</td>
        </tr>
        <tr>
          <th>50원</th>
          <td id="coin-50-quantity">${productPurchaseMenu.coinList['50']}개</td>
        </tr>
        <tr>
          <th>10원</th>
          <td id="coin-10-quantity">${productPurchaseMenu.coinList['10']}개</td>
        </tr>
      </table>
    </section>
`;
};
