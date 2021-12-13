import View from './view/index.js';
import Controller from './controller/index.js';

const init = () => {
  const view = new View();
  const controller = new Controller(view);
  controller.addEventListeners();
};

init();
