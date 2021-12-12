import Component from '../../core/Component.js';
import { newElement } from '../../utils/dom.js';
import Form from './Form.js';
import ChargedAmount from './ChargedAmount.js';
import PurchaseList from './PurchaseList.js';
import ChangesStatus from './ChangesStatus.js';

export default class Purchase extends Component {
  initChildren() {
    this.children = [
      new Form(newElement('<form id="charge-money"/>')),
      new ChargedAmount(newElement('<span id="charge-amount"/>')),
      new PurchaseList(newElement('<div id="purchase-list"/>')),
      new ChangesStatus(newElement('<div id="change-status"/>')),
    ];
  }
}
