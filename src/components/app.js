/* eslint-disable class-methods-use-this */

import Component from "../common/component.js";

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
}
