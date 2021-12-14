import Component from '../../essential/component.js';
import Header from './header.js';
import Inserted from './inserted.js';

const CONTENT = `
  <div data-component="header"></div>
  <div data-component="inserted"></div>
`;

export default class ProductPurchase extends Component {
  template() {
    return CONTENT;
  }

  mounted() {
    new Header(this.$("[data-component='header']"), {
      sendInserted: this.sendInserted.bind(this),
    });

    new Inserted(this.$("[data-component='inserted']"));
  }

  sendInserted(inserted) {
    new Inserted(this.$("[data-component='inserted']"), {
      inserted,
    });
  }
}
