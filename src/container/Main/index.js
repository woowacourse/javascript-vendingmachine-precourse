import { CURRENT_TAB, EVENT_TYPE_CLICK } from '../../constants/index.js';
import { Content } from '../../presentational/index.js';
import Component from '../root/Component.js';
import { divButtonEvent, formButtonEvent, tableButtonEvent } from './event.js';

export default class Main extends Component {
  initialized() {
    const currentTab = this.$storage.read(CURRENT_TAB);
    this.$props = {
      ...this.$props,
      component: currentTab,
      tabData: this.$storage.read(currentTab),
    };
  }

  template() {
    return `
    <div data-component=${this.$storage.read(CURRENT_TAB)}>
      ${Content(this.$props)}
    <div>
    `;
  }

  eventSetter() {
    return [
      {
        type: EVENT_TYPE_CLICK,
        callback: formButtonEvent.bind(this),
      },
      {
        type: EVENT_TYPE_CLICK,
        callback: tableButtonEvent.bind(this),
      },
      {
        type: EVENT_TYPE_CLICK,
        callback: divButtonEvent.bind(this),
      },
    ];
  }
}
