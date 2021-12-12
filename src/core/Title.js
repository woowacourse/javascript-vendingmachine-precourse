import { TAG } from '../constant/dom.js';

export default class Title {
  constructor(title) {
    this.$target = null;
    this.title = title;

    this.render();
  }

  render() {
    this.$target = document.createElement(TAG.TAG_H3);
    this.$target.innerText = this.title;
  }

  getTarget() {
    return this.$target;
  }
}
