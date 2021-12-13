import Component from '../../core/Component.js';
import CoinListTable from '../table/CoinListTable.js';
import { DISPLAY } from '../../constants/display.js';

export default class CoinList extends Component {
  domTemplate() {
    const { state } = this._props;
    const createTable = new CoinListTable(DISPLAY.TITLE_COIN_STATE, [
      DISPLAY.TEXT_COIN,
      DISPLAY.TEXT_COIN_QUANTITY,
    ]);
    const $coinListTable = createTable.setContents(state.value).result;

    return $coinListTable;
  }
}
