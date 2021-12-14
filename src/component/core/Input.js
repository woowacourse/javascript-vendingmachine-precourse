import { TAG, DOM_ATTRIBUTE } from '../../constant/dom.js';

export default class Input {
  constructor(targetId, placeholder, type) {
    this.$target = null;
    this.targetId = targetId;
    this.placeholder = placeholder;
    this.type = type;

    this.render();
  }

  render() {
    this.$target = document.createElement(TAG.TAG_INPUT);
    this.$target.setAttribute(DOM_ATTRIBUTE.ID, this.targetId);
    this.$target.placeholder = this.placeholder;
    this.$target.type = this.type;
  }

  getTarget() {
    return this.$target;
  }
}
