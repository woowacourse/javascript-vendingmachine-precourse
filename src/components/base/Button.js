import Component from './Component.js';

class Button extends Component {
  text;

  constructor(text, props) {
    super(document.createElement('button'), props);
    this.text = text;
  }

  addOnClick(onClick) {
    this.$element.addEventListener('click', (e) => {
      e.preventDefault();
      onClick(e);
    });
  }

  render() {
    this.$element.innerHTML = this.text;
  }
}

export default Button;
