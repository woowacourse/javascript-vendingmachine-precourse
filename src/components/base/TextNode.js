import Component from './Component.js';

class TextNode extends Component {
  text;

  constructor(text, props) {
    super(document.createTextNode(text), props);
    this.text = text;
  }
}

export default TextNode;
