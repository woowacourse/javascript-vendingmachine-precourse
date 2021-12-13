export const productManageItemTemplate = (
  productNameInput,
  productPriceInput,
  productQuantityInput
) => `
<tr class="product-manage-item">
  <td class="product-manage-name">${productNameInput}</td>
  <td class="product-manage-price">${productPriceInput}</td>
  <td class="product-manage-quantity">${productQuantityInput}</td>
</tr>
`;
