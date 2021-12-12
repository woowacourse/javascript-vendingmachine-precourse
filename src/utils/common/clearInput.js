import $ from './selector.js';

export const clearInput = id => {
  return ($(`${id}`).value = '');
};
