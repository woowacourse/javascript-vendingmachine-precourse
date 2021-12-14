import Component from '../../essential/component.js';
import Header from './header.js';
import Table from './table.js';

const CONTENT = `
  <div data-component="header"></div>
  <div data-component="table"></div>
`;

export default class ProductAdd extends Component {
  template() {
    return CONTENT;
  }

  mounted() {
    new Header(this.$('[data-component="header"]'), {
      sendProduct: this.sendProduct.bind(this),
    });
    new Table(this.$('[data-component="table"]'));
  }

  sendProduct(product) {
    new Table(this.$('[data-component="table"]'), {
      product,
    });
  }
}
