import Content from '../component/Content.js';

export default class Main {
  constructor(element, props) {
    this.$element = element;
    this.$props = props;

    this.render();
  }

  template() {
    return `
    <div data-component=${this.$props.component}>
      ${Content(this.$props.component)}
    <div>
    `;
  }

  render() {
    this.$element.innerHTML = this.template();
  }
}
