import Table from './Table.js';
import { CLASS } from '../../constant/selector.js';

export default class ProductPurchaseTable extends Table {
  renderBody(productList) {
    this.$target.insertAdjacentHTML('beforeend', this.templateBody(productList));
  }

  templateBody(productList) {
    const { classes } = this.props;
    return `
      ${productList.map((product) => `
        <tr class="${CLASS.PRODUCT_PURCHASE_ITEM}">
          <td class="${classes[0]}" data-product-name="${product.getName()}">${product.getName()}</td>
          <td class="${classes[1]}" data-product-price="${product.getPrice()}">${product.getPrice()}</td>
          <td class="${classes[2]}" data-product-quantity="${product.getQuantity()}">${product.getQuantity()}</td>
          <td><button class="${classes[3]}" ${
            product.getQuantity() === 0 ? `disabled` : ``
          }>구매하기</button></td>
        <tr>
      `).join('')}
    `;
  }
}
