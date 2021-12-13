import $ from '../utils/dom.js';

const renderCSS = () => {
  $('head').insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="./src/css/style.css">');
};

export default renderCSS;
