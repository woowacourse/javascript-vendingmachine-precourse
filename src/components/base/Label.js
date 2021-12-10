import Component from './Component.js';

class Label extends Component {
  text;

  constructor(tagName, text, props) {
    super(document.createElement(tagName), props);
    this.text = text;
  }

  render() {
    this.$element.innerHTML = this.text;
  }
}

export default Label;
