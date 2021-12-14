import Component from '../../../core/Component.js';
import ProductAddForm from '../product-add-form/index.js';
import ProductTable from '../product-table/index.js';

export default class ProductAddTab extends Component {
  setup() {
    this.$state = {
      stock: this.$props.stock,
    };
  }

  template() {
    return `
        <div data-component="product-add-form"></div>
        <br>
        <div data-component="product-table"></div>
      `;
  }

  mounted() {
    const { addProduct } = this;
    const { stock } = this.$state;
    const $form = this.$target.querySelector('[data-component="product-add-form"]');
    const $table = this.$target.querySelector('[data-component="product-table"]');

    new ProductAddForm($form, { addProduct: addProduct.bind(this) });
    new ProductTable($table, { stock });
  }

  addProduct({ name, price, quantity }) {
    const { stock } = this.$state;
    stock.push({ name, price, quantity });
    this.setState({ stock });
  }
}
