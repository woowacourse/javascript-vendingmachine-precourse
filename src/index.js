import createHeading from './components/utils/createHeading.js';
import createBlankNode from './components/utils/createBlankNode.js';
import setVisibility from './components/utils/setVisibility.js';
import { HEADING_TITLE } from './components/const.js';
import { KEY_MENUS, ACTION_CLICK_MENU } from './components/menu/const.js';
import createMenuByKey from './components/menu/createMenuByKey.js';
import createMenuContentByKey from './components/content/createMenuContentByKey.js';
import createDivision from './components/utils/createDivision.js';

export default class VendingMachine {
  constructor() {
    this.app = document.getElementById('app');

    this.menus = createDivision('menus');
    this.panel = createDivision('panel');

    this.app.appendChild(createHeading(1, HEADING_TITLE));
    this.app.appendChild(this.menus);
    this.app.appendChild(this.panel);

    this.init();
    this.app.onclick = this.onClick.bind(this);
  }

  init() {
    KEY_MENUS.forEach((menuKey, i) => {
      const menu = createMenuByKey(menuKey);
      this.menus.appendChild(menu);
      this.menus.appendChild(createBlankNode());

      const content = createMenuContentByKey(menuKey);
      content.innerText = menuKey;
      setVisibility(content, i === 0);
      this.panel.appendChild(content);
    });
  }

  [ACTION_CLICK_MENU](e, menuKey) {
    [...this.panel.children].forEach((content) =>
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

new VendingMachine();
