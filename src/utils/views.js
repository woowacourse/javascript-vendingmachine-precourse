export const productListView = products =>
  products
    ? products
        .map(product => {
          const { name, price, quantity } = product.getInformation();
          return `
        <tr class="product-manage-item">
          <td class="product-manage-name">${name}</td>
          <td class="product-manage-price">${price}</td>
          <td class="product-manage-quantity">${quantity}</td>
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
      <td id="vending-machine-coin-500-quantity">${quantity}</td>
    </tr>
    `;
    })
    .join('');
