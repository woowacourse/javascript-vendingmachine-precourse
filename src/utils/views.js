export const ProductListView = products =>
  products
    ? products
        .map(product => {
          const { name, price, quantity } = product.getInformation();
          return `<tr>
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
    </tr>`;
        })
        .join('')
    : '';
