import Component from '../../core/Component.js';
import ReturnTable from '../table/ReturnTable.js';

import { SELECTOR } from '../../constants/selector.js';
import { CONSTANTS } from '../../constants/constants.js';
import { cloneObject } from '../../utils/data-tools.js';

export default class ReturnCoinResult extends Component {
  init() {
    this._state = {
      returnCoin: cloneObject(CONSTANTS.COIN_LIST),
    };
  }

  domTemplate() {
    const { returnCoin } = this._state;

    const createTable = new ReturnTable('잔돈', ['동전', '개수']);
    const $purchaseTable = createTable.setContents(returnCoin).result;

    return $purchaseTable;
  }

  bindEvents() {
    this.addEvent(
      'click',
      SELECTOR.COIN_RETURN_BUTTON,
      this.bindCoinReturnClick.bind(this)
    );
  }

  bindCoinReturnClick() {
    const { handleReturnAmount } = this._props;
    const updateCoin = handleReturnAmount();

    this.setState({ returnCoin: updateCoin });
  }
}
