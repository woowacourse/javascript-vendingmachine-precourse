import Component from '../../essential/component.js';
import Header from './header.js';
import Stored from './stored.js';

const CONTENT = `
  <div data-component="header"></div>
  <div data-component="stored"></div>
`;

export default class VendingMachineManage extends Component {
  template() {
    return CONTENT;
  }

  mounted() {
    new Header(this.$('[data-component="header"]'), {
      chargeChanges: this.chargeChanges.bind(this),
    });
    new Stored(this.$('[data-component="stored"]'));
  }

  chargeChanges(makedChanges) {
    new Stored(this.$('[data-component="stored"]'), {
      makedChanges,
    });
  }
}
