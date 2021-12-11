import Component from "../common/component.js";

export default class Header extends Component {
  template() {
    return `
      <img style="height: 60px" src=${this.$props.imageSrc}></img>
      ${this.$props.title}
      <img style="height: 60px" src=${this.$props.imageSrc}></img>
    `;
  }
}
