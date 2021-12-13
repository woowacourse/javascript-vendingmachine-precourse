import Component from '../core/Component.js';
import Content from '../view/Content.js';

export default class TabContent extends Component {
  template() {
    const { tabID } = this.$props;
    return `
      <div data-component="${tabID}">
        ${Content({ tabID })}
      </div>
    `;
  }
}
