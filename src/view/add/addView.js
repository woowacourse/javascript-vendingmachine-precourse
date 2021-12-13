import { $ } from '../../utils/DOMhelper.js';
import { addTabTemplate } from '../template.js';

export default class AddView {
  init() {
    this.$main = $('main');
  }

  renderAddTab() {
    this.$main.innerHTML = addTabTemplate();
  }
}
