import Component from '../../core/Component.js';
import ReturnTable from '../table/ReturnTable.js';

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
      '#coin-return-button',
      this.handleCoinReturn.bind(this)
    );
  }

  handleCoinReturn() {
    const { returnAmount } = this._props;
    returnAmount();
  }
}
