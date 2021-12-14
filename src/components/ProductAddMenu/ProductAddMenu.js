import Component from '../../core/Component.js';
import ProductAddSection from './ProductAddSection.js';
import ProductManageTable from './ProductManageTable.js';
import $ from '../../utils/helpers.js';

export default class ProductAddMenu extends Component {
  template() {
    return `
      <section id='product-add-section'></section>
      <section id='product-manage-table'></section>
    `;
  }

  mounted() {
    const { items, addItem } = this.props;
    new ProductAddSection($('#product-add-section'), { addItem });
    new ProductManageTable($('#product-manage-table'), { items });
  }
}
