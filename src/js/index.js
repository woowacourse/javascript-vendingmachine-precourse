import { renderProductAddMenu } from './render/tabs.js';
import { initRender } from './render/common.js';
import { $ } from './util/dom.js';
import { handleClick, handleSubmit } from './core/event.js';

function App() {
  $('head').innerHTML = `<link rel="stylesheet" href="src/css/style.css"/>`;
  initRender();
  renderProductAddMenu();

  $('#app').addEventListener('click', handleClick);
  $('#app').addEventListener('submit', handleSubmit);
}

new App();
