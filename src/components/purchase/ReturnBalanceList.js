import { SELECTOR } from '../../constants/selector.js';
import { CONSTANTS } from '../../constants/constants.js';
import { cloneObject } from '../../utils/data-tools.js';

import Component from '../../core/Component.js';
import ReturnTable from '../table/ReturnTable.js';

export default class ReturnBalanceList extends Component {
  init() {
    this._state = {
      returnCoin: cloneObject(CONSTANTS.COIN_LIST),
    };
  }

  domTemplate() {
    const { returnCoin } = this._state;

    const createTable = new ReturnTable('잔돈');
    const $purchaseTable = createTable.setContents(returnCoin).result;

    return $purchaseTable;
  }

  bindEvent() {
    this.addEvent(
      'click',
      SELECTOR.COIN_RETURN_BUTTON,
      this.handleCoinReturn.bind(this)
    );
  }

  handleCoinReturn() {
    const { returnAmount } = this._props;
    const updateCoin = returnAmount();

    this.setState({ returnCoin: updateCoin });
  }
}
