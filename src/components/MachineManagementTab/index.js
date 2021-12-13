import Component from '../../core/Component.js';
import { newElement } from '../../utils/dom.js';
import Form from './Form.js';
import ChargedAmount from './ChargedAmount.js';
import CoinStatus from './CoinStatus.js';

export default class MachineManagementTab extends Component {
  initChildren() {
    this.children = [
      new Form(newElement('<form id="vending-machine-charge-form"/>')),
      new ChargedAmount(
        newElement('<span id="vending-machine-charge-amount"/>')
      ),
      new CoinStatus(newElement('<div id="coin-status"/>')),
    ];
  }
}
