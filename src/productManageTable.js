export default function productManageTable(product) {
  const newProduct = `<tr>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>${product.quantity}</td>
    </tr>`;
  return newProduct;
}
