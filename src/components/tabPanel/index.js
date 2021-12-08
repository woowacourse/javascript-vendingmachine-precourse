import isValidTabKey from '../utils/isValidTabKey.js';
import { DICT_ID_PANEL } from '../const.js';

class TabPanel {
  constructor(id, tabKey) {
    this.tabPanel = document.createElement('div');
    this.tabPanel.id = id;
    this.tabPanel.dataset.tabKey = tabKey;
    this.tabPanel.innerText = tabKey;
  }

  static createTabPanelByKey(tabKey) {
    if (!isValidTabKey(tabKey)) return undefined;
    return new TabPanel(DICT_ID_PANEL[tabKey], tabKey);
  }

  setVisibility(visible) {
    this.tabPanel.style.display = visible ? 'initial' : 'none';
  }

  getKey() {
    return this.tabPanel.dataset.tabKey;
  }

  getTabPanel() {
    return this.tabPanel;
  }
}

export default TabPanel;
