import { TAG, DOM_ATTRIBUTE } from '../../constant/dom.js';

export default class Button {
  constructor(targetId, title) {
    this.$target = null;
    this.targetId = targetId;
    this.title = title;

    this.render();
  }

  render() {
    this.$target = document.createElement(TAG.TAG_BUTTON);
    this.$target.setAttribute(DOM_ATTRIBUTE.ID, this.targetId);
    this.$target.innerText = this.title;
  }

  getTarget() {
    return this.$target;
  }
}
