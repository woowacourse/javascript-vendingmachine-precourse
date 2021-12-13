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

export const getProduceAddText = (tabMenu) => {
  const productManageListText = tabMenu['product_add_menu']
    .map((item) => productManageItemTemplate(item.name, item.price, item.quantity))
    .join('');

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
        ${productManageListText}
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

export const getVendingMachineManageText = (tabMenu) => {
  const { chargeAmount, coinList } = tabMenu['vending_machine_manage_menu'];

  return `
    <section>
      <h4>자판기 동전 충전하기</h4>
      <form id="vending-machine-charge-form">
        <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액"/>
        <button id="vending-machine-charge-button">충전하기</button>
      </form>
      <p>보유 금액: <span id="vending-machine-charge-amount">${chargeAmount}</span></p>
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
      </table>
    </section>
  `;
};
