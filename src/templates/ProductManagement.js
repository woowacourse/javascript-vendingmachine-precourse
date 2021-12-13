export const productListTemplate = products =>
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
