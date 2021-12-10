import { $tag } from '../../utils/index.js';
import Component from './Component.js';
import TextNode from './TextNode.js';

class Button extends Component {
  constructor(text, props) {
    super($tag('button'), text, props);
    this.children = [new TextNode(text)];
  }

  addOnClick(onClick) {
    this.$element.addEventListener('click', (e) => {
      e.preventDefault();
      onClick(e);
    });
  }
}

export default Button;
