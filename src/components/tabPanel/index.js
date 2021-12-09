import isValidTabKey from '../utils/isValidTabKey.js';
import { DICT_ID_TAB_PANEL, DICT_TAB_PANEL_CLASS } from './const.js';

class TabPanel {
  constructor(id, tabKey) {
    this.tabPanel = document.createElement('div');
    this.tabPanel.id = id;
    this.tabPanel.dataset.tabKey = tabKey;
  }

  static createTabPanelByKey(tabKey) {
    if (!isValidTabKey(tabKey)) return undefined;

    const tabPanel = new TabPanel(DICT_ID_TAB_PANEL[tabKey], tabKey);
    tabPanel.appendChild(new DICT_TAB_PANEL_CLASS[tabKey]().getContent());

    return tabPanel;
  }

  appendChild(child) {
    this.tabPanel.appendChild(child);
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
