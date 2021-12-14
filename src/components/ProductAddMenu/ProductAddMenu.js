import Component from '../../core/Component.js';
import ProductAddSection from './sections/ProductAddSection.js';
import ProductManageSection from './sections/ProductManageSection.js';
import $ from '../../utils/helpers.js';

export default class ProductAddMenu extends Component {
  template() {
    return `
      <section id='product-add-section'></section>
      <section id='product-manage-table'></section>
    `;
  }

  afterMount() {
    const { items, addItem } = this.props;
    new ProductAddSection($('#product-add-section'), { addItem });
    new ProductManageSection($('#product-manage-table'), { items });
  }
}
