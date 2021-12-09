export default class PurchaseView {
  renderPage = (container) => {
    const template = `
      <h2>금액 투입</h2>
      <div>
        <input type="number" id="charge-input"/>
        <button id="charge-button">투입하기</button>
      </div>
      <br/>
      <div id="charge-amount">투입한 금액: </div>
      <br/>
      <h2>구매할 수 있는 상품 현황</h2>
      <table border="1">
        <colgroup>
          <col width="170px">
          <col width="120px">
          <col width="120px">
          <col width="120px">
        </colgroup>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
          </tr>
        </thead>
        <tbody id="purchase-table-body">
        </tbody>
      </table>
    `;
    this.render(container, template);
  };

  renderPurchaseTable = (tableBody, products) => {
    const purchaseRows = this.createPurchaseRow(products);
    tableBody.innerHTML = purchaseRows;
  };

  createPurchaseRow = (products) => {
    return products
      .map(({ name, price, quantity }) => {
        return `
        <tr class="product-purchase-item">
          <td class="product-purchase-name" data-product-name=${name}>${name}</td>
          <td class="product-purchase-price" data-product-price=${price}>${price}</td>
          <td class="product-purchase-quantity" data-product-quantity=${quantity}>${quantity}</td>
          <td class="purchase-button"><button>구매하기</button></td>
        </tr>
        `;
      })
      .join("");
  };

  renderChargedAmount = (container, amount) => {
    container.innerText = `투입한 금액: ${amount}`;
  };

  render = (container, template) => {
    container.insertAdjacentHTML("beforeend", template);
  };
}
