import Component from '../../../core/Component.js';
import ProductAddForm from '../product-add-form/index.js';
import ProductTable from '../product-table/index.js';

export default class ProductAddTab extends Component {
  template() {
    return `
        <div data-component="product-add-form"></div>
        <br>
        <div data-component="product-table"></div>
      `;
  }

  mounted() {
    const { tabData, addProduct } = this.$props;
    const $form = this.$target.querySelector('[data-component="product-add-form"]');
    const $table = this.$target.querySelector('[data-component="product-table"]');

    new ProductAddForm($form, { addProduct });
    new ProductTable($table, { tabData });
  }
}
