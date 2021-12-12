import View from './View.js';
import { EVENT_TYPE } from '../utils/constants.js';

const TabView = { ...View };

TabView.setup = function (element) {
  this.init(element);
  this.bindClick();
  return this;
};

TabView.bindClick = function () {
  Array.from(this.element.children).forEach((tab) =>
    tab.addEventListener('click', (event) =>
      this.onClick(event.target.innerHTML),
    ),
  );
};

TabView.onClick = function (tabName) {
  this.emit(EVENT_TYPE.CHANGE_TAB, { tabName });
};

export default TabView;
