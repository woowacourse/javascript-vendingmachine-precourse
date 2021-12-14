import { TABS, ID, COINS } from './constants/index.js';
import Component from './core/Component.js';
import TabMenu from './components/header/TabMenu.js';
import TabContent from './components/main/TabContent.js';

export default class App extends Component {
  setup() {
    if (!localStorage.getItem('state')) this.init();
    else this.getLocalStorageState();
  }

  init() {
    this.$state = {
      curTab: ID.PRDCT_ADD,
      tabItems: TABS.map(({ id, title }, index) => ({ seq: index, id, title })),
      tabData: {
        stock: [],
        chargedCoins: COINS.map(unit => ({ unit, count: 0 })),
        userMoney: 0,
      },
    };
  }

  getLocalStorageState() {
    this.$state = JSON.parse(localStorage.getItem('state'));
  }

  template() {
    return `
        <header data-component="tab-menu"></header>
        <main data-component="tab-content"></main>
      `;
  }

  mounted() {
    const { changeTab, addProduct, chargeMachine, chargeUserMoney, purchase, returnChange } = this;
    const { curTab, tabItems, tabData } = this.$state;
    const $header = this.$target.querySelector('[data-component="tab-menu"]');
    const $main = this.$target.querySelector('[data-component="tab-content"]');

    new TabMenu($header, {
      tabItems,
      changeTab: changeTab.bind(this),
    });
    new TabContent($main, {
      tabID: curTab,
      tabData,
      addProduct: addProduct.bind(this),
      chargeMachine: chargeMachine.bind(this),
      chargeUserMoney: chargeUserMoney.bind(this),
      purchase: purchase.bind(this),
      returnChange: returnChange.bind(this),
    });
  }

  changeTab(seq) {
    const tabItems = [...this.$state.tabItems];
    const index = tabItems.findIndex(v => v.seq === seq);
    const tabID = tabItems[index].id;

    this.setState({ curTab: tabID });
  }

  // ProductAddTab 관련 메소드
  addProduct({ name, price, quantity }) {
    const { tabData } = this.$state;

    this.setState({
      tabData: { ...tabData, stock: [...tabData.stock, { name, price, quantity }] },
    });
  }

  // MachineChargeTab 관련 메소드
  chargeMachine(unit, count) {
    const { tabData } = this.$state;
    const index = tabData.chargedCoins.findIndex(v => v.unit === unit);
    const acc = tabData.chargedCoins[index].count;

    let copied = [...tabData.chargedCoins];
    copied[index].count = acc + count;

    this.setState({
      tabData: {
        ...tabData,
        chargedCoins: [...copied],
      },
    });
  }

  // ProductPurchaseTab 관련 메소드
  chargeUserMoney(amount) {
    const { tabData } = this.$state;

    this.setState({
      tabData: {
        ...tabData,
        userMoney: tabData.userMoney + Number(amount),
      },
    });
  }

  purchase(name) {
    const { tabData } = this.$state;
    const { stock, userMoney } = tabData;
    const index = stock.findIndex(v => v.name == name);
    const { price, quantity } = stock[index];

    if (userMoney < price || quantity <= 0) {
      return;
    }

    let copied = [...stock];
    copied[index].quantity -= 1;

    this.setState({
      tabData: { ...tabData, userMoney: userMoney - price, stock: [...copied] },
    });
  }

  returnChange() {
    const { tabData } = this.$state;
    const { userMoney, chargedCoins } = tabData;
    const [remainChange, changes] = this.computeChange(userMoney, chargedCoins);

    this.setState({
      tabData: { ...tabData, userMoney: remainChange, chargedCoins: [...changes] },
    });
  }

  computeChange(userMoney, chargedCoins) {
    const sortedCoinUnit = COINS.sort((a, b) => b - a);
    let remainChange = userMoney;
    let changes = [...chargedCoins];

    for (let unit of sortedCoinUnit) {
      const count = Math.floor(remainChange / unit);
      if (count > 0 && this.hasMachineEnoughChange(unit, count)) {
        const index = changes.findIndex(v => v.unit === unit);
        changes[index].count -= count;
        remainChange %= unit;
      }
    }

    return [remainChange, [...changes]];
  }

  hasMachineEnoughChange(unit, count) {
    const { chargedCoins } = this.$state.tabData;
    const index = chargedCoins.findIndex(v => v.unit === unit);
    return chargedCoins[index].count >= count;
  }
}
