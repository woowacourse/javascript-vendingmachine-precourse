class ProductTable {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addTemplate();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h3>상품 현황</h3>
      <table border="1">
        <tr>
          <td>상품명</td>
          <td>가격</td>
          <td>수량</td>
        </tr>
      </table>
    `;
  }
}

export default ProductTable;
