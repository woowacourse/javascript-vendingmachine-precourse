import { HTML_OF_MACHINE_MANAGE_PART } from '../utils/html.js';

export default class MachineManageView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_MACHINE_MANAGE_PART;
  }
}
