import Component from '../../essential/component.js';
import * as CONSTANTS from '../../utils/constants.js';
import { loadFromStorage, saveToStorage } from '../../utils/storage.js';

const HEAD = remains => `
  <br/><br/>보유 금액: <span id="vending-machine-charge-amount">${remains}</span>원
  <h3>자판기가 보유한 동전</h3>
  <table>
    <thead>
    <th>동전</th>
    <th>개수</th>
    </thead>
    <tbody>
`;

const BODY = changes => `
  ${CONSTANTS.COINS.map(
    unit => `
        <tr>
            <td>${unit}원</td>
            <td><span id="vending-machine-coin-${unit}-quantity">${changes[unit]}개</span></td>
        </tr>
      `,
  ).join('')}
`;

const TAIL = `
    </tbody>
  </table>
`;

export default class Stored extends Component {
  setup() {
    this.$state = {
      changes: loadFromStorage(CONSTANTS.STORAGE_CHANGES_KEY),
      remains: loadFromStorage(CONSTANTS.STORAGE_REMAINS_KEY),
    };

    this.checkProps();
  }

  checkProps() {
    if (this.$props) {
      let makedChanges = this.$props.makedChanges;

      CONSTANTS.COINS.map(unit => {
        this.$state.changes[unit] += makedChanges[unit];
        this.$state.remains += makedChanges[unit] * unit;
      });

      saveToStorage(CONSTANTS.STORAGE_CHANGES_KEY, this.$state.changes);
      saveToStorage(CONSTANTS.STORAGE_REMAINS_KEY, this.$state.remains);
    }
  }

  template() {
    return HEAD(this.$state.remains) + BODY(this.$state.changes) + TAIL;
  }
}
