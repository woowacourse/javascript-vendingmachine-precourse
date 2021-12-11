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
