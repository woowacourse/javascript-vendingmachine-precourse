import { CURRENT_TAB, EVENT_TYPE_CLICK } from '../../constants/index.js';
import { Menu } from '../../presentational/index.js';
import Component from '../root/Component.js';

export default class Header extends Component {
  template() {
    return `
    <div>
      ${Menu(this.$props)}
    </div>
    `;
  }

  eventSetter() {
    return [
      {
        type: EVENT_TYPE_CLICK,
        callback: ({ target }) => {
          if (!target.matches('button')) return;
          this.$storage.create(CURRENT_TAB, target.id);
        },
      },
    ];
  }
}
