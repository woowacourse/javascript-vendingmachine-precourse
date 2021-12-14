import Table from "./table.js";

export default class PurchaseTable extends Table {
  getTableHeader() {
    return this.$props.tableHeaders
      .map((header) => `<th>${header}</th>`)
      .join("");
  }

  getTableRow(item) {
    const [name, price, quantity] = item;
    return `
      <tr id="product-purchase-item">
        <td class="product-purchase-name" data-product-name=${name}>${name}</td>
        <td class="product-purchase-price" data-product-price=${price}>${price}</td>
        <td class="product-purchase-quantity" data-product-quantity=${quantity}>${quantity}</td>
        <td><button class="purchase-button" data-product-name=${name}>구매하기</button></td>
      </tr>`;
  }
}
