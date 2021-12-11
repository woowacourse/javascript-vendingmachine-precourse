import Component from '../../core/Component.js';
import { newElement } from '../../utils/dom.js';
import Form from './Form.js';

export default class Management extends Component {
  initChildren() {
    this.children = [
      new Form(newElement('<form id="vending-machine-charge-form"/>')),
    ];
  }
}
