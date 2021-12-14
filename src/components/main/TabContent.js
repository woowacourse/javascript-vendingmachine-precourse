import { ID } from '../../constants/index.js';

import Component from '../../core/Component.js';
import ProductAddTab from './tab-product-add/index.js';
import MachineManageTab from './tab-machine-manage/index.js';
import ProductPurchaseTab from './tab-product-purchase/index.js';

export default class TabContent extends Component {
  template() {
    const { tabID } = this.$props;
    return `
      <div data-component="${tabID}"></div>
    `;
  }

  mounted() {
    const { tabID } = this.$props;
    const $tabContent = this.$target.querySelector(`[data-component="${tabID}"]`);

    this.getDataComponent($tabContent, tabID);
  }

  getDataComponent($target, tabID) {
    const { stock, chargedCoins } = this.$props;

    switch (tabID) {
      case ID.PRDCT_ADD:
        return new ProductAddTab($target, { stock });

      case ID.MCHNE_MANAGE:
        return new MachineManageTab($target, { chargedCoins });

      case ID.PRDCT_PURCHASE:
        return new ProductPurchaseTab($target, { stock, chargedCoins });
    }
  }
}
