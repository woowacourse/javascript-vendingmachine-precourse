import VendingMachineManageMenu from '../components/vendingMachineManageMenu.js';

export default function VendingMachineManageView(container) {
  this.initView = VendingMachineManageMenu();

  this.render = () => {
    container.append(this.initView);
  };
}
