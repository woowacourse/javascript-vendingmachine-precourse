import Component from '../../core/Component.js';
import ReturnTable from '../table/ReturnTable.js';

import { CONSTANTS } from '../../constants/constants.js';
import { cloneObject } from '../../utils/data-tools.js';
import { DISPLAY, SELECTOR } from '../../constants/display.js';

export default class ReturnCoinResult extends Component {
  init() {
    this._state = {
      returnCoin: cloneObject(CONSTANTS.COIN_LIST),
    };
  }

  domTemplate() {
    const { returnCoin } = this._state;

    const createTable = new ReturnTable(DISPLAY.TITLE_PURCHASE_BALANCE, [
      DISPLAY.TEXT_COIN,
      DISPLAY.TEXT_COIN_QUANTITY,
    ]);
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
