import createElement from './createElement.js';

const createButton = (id, text) =>
  createElement('button', { id, innerText: text });

export default createButton;
