import { $tag } from '../../utils/index.js';
import Component from './Component.js';
import TextNode from './TextNode.js';

class Button extends Component {
  constructor(text, props) {
    super($tag('button'), props);
    this.children = [new TextNode(text)];
  }

  setOnClick(onClick) {
    this.$element.onclick = (e) => {
      e.preventDefault();
      onClick(e);
    };
  }
}

export default Button;
