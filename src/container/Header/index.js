import { isEquals } from '../../common/helper.js';
import {
  CURRENT_TAB,
  DEFAULT_VALUES,
  EVENT_TYPE_CLICK,
  MACHINE_MANAGE,
  PURCHASE_MENU,
} from '../../constants/index.js';
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
          this.createTabData(target.id);
        },
      },
    ];
  }

  createTabData(component) {
    if (isEquals(component, PURCHASE_MENU))
      this.$storage.create(
        PURCHASE_MENU,
        {
          ...this.$storage.read(component),
          [MACHINE_MANAGE]: DEFAULT_VALUES[MACHINE_MANAGE],
        },
        false,
      );
    return this.$storage.create(CURRENT_TAB, component);
  }
}
