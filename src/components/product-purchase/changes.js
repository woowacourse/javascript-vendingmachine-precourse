import Component from '../../essential/component.js';
import * as CONSTANTS from '../../utils/constants.js';

const MAPPED_COINS = returnedChanges => `
  ${CONSTANTS.COINS.map(
    unit => `
    <tr>
      <td>${unit}원</td>
      <td id="coin-${unit}-quantity">${returnedChanges[unit]}개</td>
    </tr>
    `,
  ).join('')}
`;

const CONTENT = returnedChanges => `
  <h3>잔돈</h3>
  <input type="button" id="coin-return-button" value="반환하기" />
  <table>
    <thead>
      <th>동전</th>
      <th>개수</th>
    </thead>
    <tbody>
      ${MAPPED_COINS(returnedChanges)}
    </tbody>
  <table>
`;

export default class Changes extends Component {
  setup() {
    this.$state = {
      returnedChanges: { 500: 0, 100: 0, 50: 0, 10: 0 },
    };
  }

  template() {
    return CONTENT(this.$state.returnedChanges);
  }

  setEvent() {
    this.addEvent('click', '#coin-return-button', () => {
      this.$props.checkReturnChanges(this.$state.returnedChanges);
      this.render();
    });
  }
}
