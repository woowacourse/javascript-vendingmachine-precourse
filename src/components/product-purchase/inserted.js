import Component from '../../essential/component.js';
import * as CONSTANTS from '../../utils/constants.js';
import { loadFromStorage, saveToStorage } from '../../utils/storage.js';

const CONTENT = inserted => `
  <br/>투입한 금액: <span id="charge-amount">${inserted}</span>원
`;

export default class Inserted extends Component {
  setup() {
    this.$state = {
      inserted: loadFromStorage(CONSTANTS.STORAGE_INSERTED_KEY),
    };

    this.checkProps();
  }

  checkProps() {
    if (this.$props) {
      let inserted = this.$props.inserted;
      this.$state.inserted += inserted;

      saveToStorage(CONSTANTS.STORAGE_INSERTED_KEY, this.$state.inserted);
    }
  }

  template() {
    return CONTENT(this.$state.inserted);
  }
}
