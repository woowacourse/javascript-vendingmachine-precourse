import View from './View.js';

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
  this.emit('changeTab', { tabName });
};

export default TabView;
