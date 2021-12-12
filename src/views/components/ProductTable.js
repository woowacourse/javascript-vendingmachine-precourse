export default class ProductTable extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
          <table border="1" style="width:${this.getAttribute(
            'width',
          )}px; border-collapse: collapse;">
              <thead>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
                ${this.getAttribute('children') || ''}
              </thead>
              <tbody id="${this.getAttribute('tbodyid')}">
              </tbody>
          </table>
          `;
  }
}

window.customElements.define('product-table', ProductTable);
