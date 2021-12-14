import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';
import VendingMachineManageFormView from './vending-machine-manage-form-view.js';
import VendingMachineManageTableView from './vending-machine-manage-table-view.js';

class VendingMachineManageView {
  static template = `
    <div id="${ELEMENT_IDS.VENDING_MACHINE_MANAGE.PANE}"></div>
  `;

  constructor($container) {
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(VendingMachineManageView.template);
    this.$container.appendChild(this.$view);
    this.mountChildViews();
    return this;
  }

  mountChildViews() {
    this.$form = new VendingMachineManageFormView(this.$view).mount();
    this.$table = new VendingMachineManageTableView(this.$view).mount();
  }

  unmount() {
    this.unmountChildViews();
    this.$container.removeChild(this.$view);
  }

  unmountChildViews() {
    this.$form.unmount();
    this.$table.unmount();
  }
}

export default VendingMachineManageView;
