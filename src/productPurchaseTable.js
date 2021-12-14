export default function productPurchaseTable(product) {
  const newProduct = `<tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
      <td><button id='purchaseButton'>구매</button></td>
      </tr>`;
  return newProduct;
}
