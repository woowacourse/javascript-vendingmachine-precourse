import Table from './Table.js';

export default class ProductStatusTable extends Table {
  renderBody(productList) {
    this.$target.insertAdjacentHTML('beforeend', this.templateBody(productList));
  }

  templateBody(productList) {
    const { classes } = this.props;
    return `
      ${productList
        .map(
          (product) => `
            <tr>
              <td class"${classes[0]}">${product.getName()}</td>
              <td class"${classes[1]}">${product.getPrice()}</td>
              <td class"${classes[2]}">${product.getQuantity()}</td>
            </tr>
          `
        )
        .join('')}
    `;
  }
}
