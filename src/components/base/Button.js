import { $tag } from '../../utils/index.js';
import TextComponent from './TextComponent.js';

class Button extends TextComponent {
  constructor(text, props) {
    super($tag('button'), text, props);
  }

  addOnClick(onClick) {
    this.$element.addEventListener('click', (e) => {
      e.preventDefault();
      onClick(e);
    });
  }
}

export default Button;
