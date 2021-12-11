import TabProductAdd from '../component/TabProductAdd.js';
import TabMachineManage from '../component/TabMachineManage.js';
import TabPurchase from '../component/TabPurchase.js';

export default class TabContainer {
  constructor($target) {
    this.$target = $target;
    this.tabProductAdd = null;
    this.tabMachineManage = null;
    this.tabPurchase = null;

    this.init();
  }

  init() {
    this.tabProductAdd = new TabProductAdd(this.$target);
    this.tabMachineManage = new TabMachineManage(this.$target);
    this.tabPurchase = new TabPurchase(this.$target);
  }
}
