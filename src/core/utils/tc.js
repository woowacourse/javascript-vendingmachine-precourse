/* eslint-disable no-underscore-dangle */
/* eslint-disable valid-typeof */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */

/**
 * `target`의 타입을 체크한다.
 * usage: `function foo(x, _ = type(x, type_of_x))`
 * @param {*} target
 * @param {(string|Object)} type
 * @returns target
 */
const tc = (target, type) => {
  if (typeof type == 'string') {
    if (typeof target != type)
      throw new Error(`invalid type: ${target} is not ${type}`);
  } else if (!(target instanceof type))
    throw new Error(`invalid type: ${target} is not ${type}`);

  return target;
};

export default tc;
