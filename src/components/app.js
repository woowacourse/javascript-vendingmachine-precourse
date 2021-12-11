import Component from "../common/component.js";
import Header from "./header.js";

export default class App extends Component {
  initialize() {
    this.$state = {};
  }

  template() {
    return `
      <h1 id="title"></h1>
      <div id="button-tabs"></div>
      <div id="content"></div>
    `;
  }

  componentDidMount() {
    const $titleSelector = this.$target.querySelector("#title");
    const $buttonTabsSelector = this.$target.querySelector("#button-tabs");
    const $contentSelector = this.$target.querySelector("#content");

    new Header($titleSelector, {
      title: "자판기",
      imageSrc: "../../images/beverage_icon.png",
    });
  }
}
