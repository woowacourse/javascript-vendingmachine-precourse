import Component from '../../core/Component.js';
import ReturnTable from '../table/ReturnTable.js';
import { SELECTOR } from '../../constants/selector.js';

export default class ReturnBalance extends Component {
  init() {
    this._props.state.add(this);
  }

  domTemplate() {
    const { returnCoins } = this._props;

    const createTable = new ReturnTable('잔돈');
    const $purchaseTable = createTable.setContents(returnCoins).result;

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
    returnAmount();
  }
}
