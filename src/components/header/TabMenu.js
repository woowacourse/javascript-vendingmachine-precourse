import Component from '../../core/Component.js';

export default class TabMenu extends Component {
  template() {
    const { tabData } = this.$props;

    return `
      <h1>🥤자판기🥤</h1>
      <nav style="height: 35px">
        <ul style="list-style: none; padding: 0px;">
          ${tabData
            .map(
              ({ seq, id, title }) => `
                <li data-seq="${seq}" style="float: left; margin-right: 15px;">
                  <button id="${id}" class="tabButton">${title}</button>
                </li>
              `
            )
            .join('')}
        </ul>
      </nav>
    `;
  }

  setEvent() {
    const { changeTab } = this.$props;

    this.addEvent('click', '.tabButton', ({ target }) => {
      changeTab(Number(target.closest('[data-seq]').dataset.seq));
    });
  }
}
