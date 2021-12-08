import { $ } from '../common/index.js';
import Menu from '../presentational/Menu.js';
import Main from './Main.js';
import Component from './root/Component.js';

export default class Header extends Component {
  template() {
    return `
    <div>
      ${Menu(this.$props)}
    </div>
    `;
  }

  mount() {
    $('nav').addEventListener('click', ({ target }) => {
      if (!target.matches('button')) return;
      new Main('main', { component: target.id });
    });
  }
}
