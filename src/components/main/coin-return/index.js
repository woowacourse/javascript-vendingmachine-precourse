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
    const { userMoney, chargedCoins } = this.$props.tabData;
    const $coinTable = this.$target.querySelector('[data-component="coin-return-table"]');
    let coins = userMoney == 0 ? COINS.map(unit => ({ unit, count: 0 })) : chargedCoins;
    new CoinTable($coinTable, { coins, description: '' });
  }

  setEvent() {
    const { returnChange } = this.$props;
    this.addEvent('click', '#coin-return-button', () => {
      returnChange();
    });
  }
}
