import Component from "./components/root/Component.js";
import Menu from "./components/Menu.js";

export default class App extends Component {
  setup() {
    console.log("App");
    this.$state = {
      currentTabId: "product-add-menu",
    };
  }

  template() {
    return `
        <div id="header">
            <h1>🥤 자판기 🥤</h1>
            <div id="menu" />
        </div>
        <div id="contents"></div>
    `;
  }

  mounted() {
    console.log("---------", this.$state);
    const { changeTab } = this;
    const $menu = document.querySelector("#menu");

    new Menu($menu, { changeTab: changeTab.bind(this) });
  }

  changeTab(newTabId) {
    this.setState({ currentTabId: newTabId });
  }
}
