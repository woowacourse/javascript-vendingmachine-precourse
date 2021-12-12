import createHeading from './components/utils/createHeading.js';
import createBlankNode from './components/utils/createBlankNode.js';
import createDivision from './components/utils/createDivision.js';
import setVisibility from './components/utils/setVisibility.js';
import getChildrenToList from './components/utils/getChildrenToList.js';

import { HEADING_TITLE } from './components/const.js';
import {
  KEY_MENUS,
  ACTION_CLICK_MENU,
  KEY_MENU_ADD,
  KEY_MENU_CHARGE,
} from './components/menu/const.js';
import createMenuByKey from './components/menu/createMenuByKey.js';

import createMenuContentByKey from './components/content/createMenuContentByKey.js';
import {
  createAddFormContainer,
  createCurrentProductTableContainer,
} from './components/addContent/index.js';
import {
  createVendingMachineChargeFormContainer,
  createVendingMachineCoinTableContainer,
} from './components/chargeContent/index.js';

import {
  getCurrentMenu,
  setCurrentMenu,
} from './library/storage/currentMenu.js';
import { getProducts } from './library/storage/products.js';
import { getChargedCoins } from './library/storage/chargedCoins.js';

export default class VendingMachine {
  constructor(products, chargedCoins) {
    this.products = products;
    this.chargedCoins = chargedCoins;

    this.app = document.getElementById('app');
    this.menus = createDivision({ id: 'menus' });
    this.panel = createDivision({ id: 'panel' });

    this.app.appendChild(createHeading(1, HEADING_TITLE));
    this.app.appendChild(this.menus);
    this.app.appendChild(this.panel);

    this.initMenu();
    this.app.onclick = this.onClick.bind(this);
  }

  initMenu() {
    KEY_MENUS.forEach((menuKey) => {
      const menu = createMenuByKey(menuKey);
      this.menus.appendChild(menu);
      this.menus.appendChild(createBlankNode());

      const content = createMenuContentByKey(menuKey);
      setVisibility(content, menuKey === getCurrentMenu());
      this.appendContentByKey(content, menuKey);
      this.panel.appendChild(content);
    });
  }

  appendContentByKey(content, menuKey) {
    if (menuKey === KEY_MENU_ADD) this.appendAddContent(content, this.products);
    if (menuKey === KEY_MENU_CHARGE)
      this.appendChargeContent(content, this.chargedCoins);
  }

  appendAddContent(content, products) {
    content.appendChild(createAddFormContainer());
    content.appendChild(createCurrentProductTableContainer(products));
  }

  appendChargeContent(content, chargedCoins) {
    content.appendChild(createVendingMachineChargeFormContainer(chargedCoins));
    content.appendChild(createVendingMachineCoinTableContainer(chargedCoins));
  }

  [ACTION_CLICK_MENU](e, menuKey) {
    setCurrentMenu(menuKey);
    getChildrenToList(this.panel).forEach((content) =>
      setVisibility(content, content.dataset.menuKey === menuKey)
    );
  }

  onClick(event) {
    const { action, menuKey } = event.target.dataset;

    if (action && menuKey) {
      this[action](event, menuKey);
    }
  }
}

const products = getProducts();
const chargedCoin = getChargedCoins();

new VendingMachine(products, chargedCoin);
