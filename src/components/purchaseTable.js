import Table from "./table.js";

export default class PurchaseTable extends Table {
  getTableHeader() {
    return [...this.$props.tableHeaders, "구매"]
      .map((header) => `<th>${header}</th>`)
      .join("");
  }

  getTableRow(item) {
    const [name, price, quantity] = item;
    return `
      <tr>
        <td data-product-name=${name}>${name}</td>
        <td data-product-price=${price}>${price}</td>
        <td data-product-quantity=${quantity}>${quantity}</td>
        <td><button class="purchase-button">구매하기</button></td>
      </tr>`;
  }
}
