import Menu from '../presentational/Menu.js';
import Main from './Main.js';
import Component from './root/Component.js';

export default class Header extends Component {
  initialized() {
    this.$eventBus.addEvent('nav', 'button', 'click', this, this.changeTab);
  }

  template() {
    return `
    <div>
    ${Menu(this.$props)}
    </div>
    `;
  }

  mount() {
    this.$eventBus.dispatch('nav', 'button', 'click');
  }

  changeTab({ target }, scope) {
    if (!target.matches('button')) return;
    const { id: component } = target;
    const tabData = scope.$storage.read(component);
    new Main('main', { ...scope.$props, component, tabData });
  }
}
