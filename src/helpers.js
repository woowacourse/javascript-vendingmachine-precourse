import tc from './core/utils/tc.js';

// querySelector wrapper
export default function $(selector, scope, _ = tc(selector, 'string')) {
  return (scope || document).querySelector(selector);
}
