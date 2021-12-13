import { $ } from '../../utils/DOMhelper.js';
import { manageTabTemplate } from '../template.js';

export default class ManageView {
  init() {
    this.$main = $('main');
  }

  renderManageTab() {
    this.$main.innerHTML = manageTabTemplate();
  }
}
