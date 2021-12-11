import createElement from './createElement.js';

const createInput = (id, type, placeholder) =>
  createElement('input', { id, type, placeholder });

export default createInput;
