import Component from '../../core/Component.js';
import CoinListTable from '../table/CoinListTable.js';

export default class CoinList extends Component {
  domTemplate() {
    const { state } = this._props;
    const createTable = new CoinListTable('자판기가 보유한 동전');
    const $coinListTable = createTable.setContents(state.value).result;

    return $coinListTable;
  }
}
