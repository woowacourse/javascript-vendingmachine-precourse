import Menu from '../presentational/Menu.js';
import Main from './Main.js';
import Component from './root/Component.js';

export default class Header extends Component {
  initialized() {
    this.$eventBus.addEvent('nav', 'button', 'click', this.changeTab.bind(this));
  }

  template() {
    return `
    <div>
    ${Menu(this.$props)}
    </div>
    `;
  }

  mount() {
    this.$eventBus.delegation('nav', 'button', 'click');
  }

  changeTab({ target }) {
    if (!target.matches('button')) return;
    new Main('main', { ...this.$props, component: target.id });
  }
}
