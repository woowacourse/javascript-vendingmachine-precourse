export const productListView = products =>
  products
    ? products
        .map(product => {
          const { name, price, quantity } = product.getInformation();
          return `
        <tr class="product-manage-item">
          <td class="product-manage-name">${name}</td>
          <td class="product-manage-price">${price}원</td>
          <td class="product-manage-quantity">${quantity}개</td>
        </tr>`;
        })
        .join('')
    : '';

export const coinStatusView = coins =>
  Object.entries(coins)
    .map(([unit, quantity]) => {
      return `
    <tr>
      <td>${unit}</td>
      <td id="vending-machine-coin-${unit}-quantity">${quantity}개</td>
    </tr>
    `;
    })
    .join('');

export const purchaseProductsView = items =>
  items
    ? items
        .map(item => {
          const { name, price, quantity } = item.getInformation();
          return `
  <tr class="product-purchase-item">
    <td class="product-purchase-name" data-product-name="${name}">${name}</td>
    <td class="product-purchase-price" data-product-price="${price}">${price}개</td>
    <td class="product-purchase-quantity" data-product-quantity="${quantity}개">${quantity}</td>
    <td><button class="purchase-button">구매하기</button></td>
  </tr>
  `;
        })
        .join('')
    : '';

export const changeStatusView = coins =>
  Object.entries(coins)
    .map(([unit, quantity]) => {
      return `
<tr>
  <td>${unit}원</td>
  <td id="coin-${unit}-quantity">${quantity}개</td>
</tr>
`;
    })
    .join('');
