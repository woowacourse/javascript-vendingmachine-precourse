import $ from './selector.js';

export const render = async (products, tab) => {
  const template = products
    .map(product => {
      return `
        <tr>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.quantity}</td>
        </tr>
      `;
    })
    .join('');

  $('#product-list').innerHTML = template;
};
