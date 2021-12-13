import { TABS, ID } from './constants/index.js';
import Component from './core/Component.js';
import TabMenu from './components/TabMenu.js';
import TabContent from './components/TabContent.js';

export default class App extends Component {
  setup() {
    this.$state = {
      tabItems: TABS.map(({ id, title }, index) => {
        return { seq: index, id, title };
      }),
    };
  }

  template() {
    return `
        <header data-component="tab-menu"></header>
        <main data-component="tab-content"></main>
      `;
  }

  mounted() {
    const { tabItems, changeTab } = this;
    const $header = this.$target.querySelector('[data-component="tab-menu"]');
    const $main = this.$target.querySelector('[data-component="tab-content"]');

    new TabMenu($header, {
      tabItems,
      changeTab: changeTab.bind(this),
    });
    new TabContent($main, { tabID: ID.PRDCT_ADD });
  }

  get tabItems() {
    const { tabItems } = this.$state;
    return tabItems;
  }

  changeTab(seq) {
    const $main = this.$target.querySelector('[data-component="tab-content"]');
    const tabItems = [...this.$state.tabItems];
    const index = tabItems.findIndex(v => v.seq === seq);
    const tabId = tabItems[index].id;

    new TabContent($main, { tabID: tabId });
  }
}
