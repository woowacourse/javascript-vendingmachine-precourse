import { $tag } from '../../utils/index.js';
import Component from './Component.js';
import TextNode from './TextNode.js';

class Label extends Component {
  constructor(tagName, text, props) {
    super($tag(tagName), props);
    this.children = [new TextNode(text)];
  }
}

export default Label;
