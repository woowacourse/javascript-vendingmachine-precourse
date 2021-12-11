import createElement from './createElement.js';

const createHeading = (level, text) =>
  createElement(`h${level}`, { innerText: text });

export default createHeading;
