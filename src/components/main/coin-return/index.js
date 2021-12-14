import { COINS } from '../../../constants/index.js';
import Component from '../../../core/Component.js';
import CoinTable from '../coin-table/index.js';

export default class CoinReturn extends Component {
  template() {
    return `
        <h3>잔돈</h3>
        <button id="coin-return-button">반환하기</button>
        <div data-component="coin-return-table"></div>
    `;
  }

  mounted() {
    const { chargedCoins } = this.$props.tabData;
    const $coinTable = this.$target.querySelector('[data-component="coin-return-table"]');
    new CoinTable($coinTable, { coins: chargedCoins, description: '' });
  }

  setEvent() {
    const { returnChange } = this.$props;
    this.addEvent('click', '#coin-return-button', () => {
      returnChange();
    });
  }
}
