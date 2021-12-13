import { TABS, ID } from './constants/index.js';
import Component from './core/Component.js';
import TabMenu from './components/header/TabMenu.js';
import TabContent from './components/main/TabContent.js';

export default class App extends Component {
  setup() {
    this.$state = {
      tabData: TABS.map(({ id, title }, index) => {
        return { seq: index, id, title };
      }),
      stock: [],
    };
  }

  template() {
    return `
        <header data-component="tab-menu"></header>
        <main data-component="tab-content"></main>
      `;
  }

  mounted() {
    const { changeTab } = this;
    const { tabData, stock } = this.$state;
    const $header = this.$target.querySelector('[data-component="tab-menu"]');
    const $main = this.$target.querySelector('[data-component="tab-content"]');

    new TabMenu($header, {
      tabData,
      changeTab: changeTab.bind(this),
    });
    new TabContent($main, {
      stock,
      tabID: ID.PRDCT_ADD,
    });
  }

  changeTab(seq) {
    const { stock } = this.$state;
    const $main = this.$target.querySelector('[data-component="tab-content"]');
    const tabData = [...this.$state.tabData];
    const index = tabData.findIndex(v => v.seq === seq);
    const tabID = tabData[index].id;

    new TabContent($main, { stock, tabID });
  }
}
