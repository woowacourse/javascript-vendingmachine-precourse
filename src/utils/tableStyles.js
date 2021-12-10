import { $$ } from './selector.js';

export const addTableStyle = () => {
  $$('table').forEach(e => {
    e.style.borderCollapse = 'collapse';
    e.style.textAlign = 'center';
  });

  $$('td').forEach(e => (e.style.padding = '0.5em 2em'));
};
