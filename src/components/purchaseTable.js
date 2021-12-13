import Table from "./table.js";

export default class PurchaseTable extends Table {
  getTableHeader() {
    return [...this.$props.tableHeaders, "구매"]
      .map((header) => `<th>${header}</th>`)
      .join("");
  }

  getTableRow(item) {
    return `
      <tr>
        <td data-product-name=${item.name}>${item.name}</td>
        <td data-product-price=${item.price}>${item.price}</td>
        <td data-product-quantity=${item.quantity}>${item.quantity}</td>
        <td><button class="purchase-button">구매하기</button></td>
      </tr>`;
  }
}
