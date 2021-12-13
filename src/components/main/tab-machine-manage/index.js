import Component from '../../../core/Component.js';

export default class MachineManageTab extends Component {
  template() {
    return `
        <div data-component="vending-machine-charge"></div>
        <div data-component="vendomg-machine-coin"></div>
      `;
  }

  mounted() {}
}
