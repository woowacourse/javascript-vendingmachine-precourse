// import { $ } from '../../utils/DOMhelper.js';
import { addTabTemplate } from '../template.js';

export default class AddView {
  renderAddTab($main) {
    $main.innerHTML = addTabTemplate();
  }
}
