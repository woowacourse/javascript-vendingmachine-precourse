import Component from '../../core/Component.js';
import ChangesStore from '../../stores/ChangesStore.js';

export default class ChargedAmount extends Component {
  getGlobalState() {
    return ChangesStore.getState();
  }

  render() {
    const { changes } = this.getGlobalState();
    this.$container.innerHTML = `보유금액: ${changes}원`;
  }
}
