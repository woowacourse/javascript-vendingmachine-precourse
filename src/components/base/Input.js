import Component from './Component.js';

class Input extends Component {
  constructor(props) {
    super(document.createElement('input'), props);
  }

  get value() {
    return this.$element.value;
  }

  resetValue() {
    this.$element.value = '';
  }
}

export default Input;
