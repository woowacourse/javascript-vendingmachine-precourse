import Tab from './components/tab/index.js';
import TabPanel from './components/tabPanel/index.js';
import createHeading from './components/utils/createHeading.js';
import {
  KEY_TABS,
  ACTION_CLICK_TAB,
  HEADING_TITLE,
} from './components/const.js';

export default class VendingMachine {
  constructor() {
    this.app = document.getElementById('app');

    this.tabContainer = document.createElement('div');
    this.tabContainer.className = 'tabs';
    this.tabPanelContainer = document.createElement('div');
    this.tabPanelContainer.className = 'tabPanels';

    this.app.appendChild(createHeading(1, HEADING_TITLE));
    this.app.appendChild(this.tabContainer);
    this.app.appendChild(this.tabPanelContainer);

    this.tabs = {};
    this.tabPanels = {};

    this.init();
    this.app.onclick = this.onClick.bind(this);
  }

  init() {
    KEY_TABS.forEach((tabKey, i) => {
      const tab = Tab.createTabByKey(tabKey);
      const tabPanel = TabPanel.createTabPanelByKey(tabKey);
      tabPanel.setVisibility(i === 0);

      this.tabContainer.appendChild(tab.getTab());
      this.tabContainer.appendChild(document.createTextNode(' '));
      this.tabPanelContainer.appendChild(tabPanel.getTabPanel());

      this.tabs[tabKey] = tab;
      this.tabPanels[tabKey] = tabPanel;
    });
  }

  [ACTION_CLICK_TAB](e, tabKey) {
    Object.values(this.tabPanels).forEach((tabPanel) =>
      tabPanel.setVisibility(tabPanel.getKey() === tabKey)
    );
  }

  onClick(event) {
    const { action, tabKey } = event.target.dataset;

    if (action) {
      this[action](event, tabKey);
    }
  }
}

new VendingMachine();
