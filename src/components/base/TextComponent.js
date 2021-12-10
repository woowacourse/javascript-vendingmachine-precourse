import Component from './Component.js';

class TextComponent extends Component {
  text;

  constructor($element, text, props) {
    super($element, props);
    this.text = text;
  }

  render() {
    this.renderText(this.text);
  }

  update() {
    this.renderText(this.text);
  }
}

export default TextComponent;
