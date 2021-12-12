import Component from '../../core/Component.js';
import { newElement } from '../../utils/dom.js';
import Form from './Form.js';
import ChargedAmount from './ChargedAmount.js';

export default class Purchase extends Component {
  initChildren() {
    this.children = [
      new Form(newElement('<form id="charge-money"/>')),
      new ChargedAmount(newElement('<span id="charge-amount"/>')),
    ];
  }
}
