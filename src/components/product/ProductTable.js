import { LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage } from '../../utils/localStorage.js';
import {
  productTableContents,
  productTableHeader,
} from '../../utils/template.js';

class ProductTable {
  constructor($target, state) {
    this.$target = $target;
    this.state = state;
    this.state.event.subscribe(this.render.bind(this));

    this.render();
  }

  render() {
    this.addTemplate();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <h3>상품 현황</h3>
      <table border="1">
        ${productTableHeader}
        ${productTableContents(getLocalStorage(LOCAL_DB.PRODUCT))}
      </table>
    `;
  }
}

export default ProductTable;
