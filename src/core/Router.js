import tc from './utils/tc.js';

export default class Router {
  constructor(
    target,
    location,
    _0 = tc(target, HTMLElement),
    _1 = tc(location, 'string')
  ) {
    this.$target = target;
    this.location = location;

    this.switchRoute();
  }

  switchRoute() {
    [...this.$target.children].forEach((e) => {
      if (e.dataset.path !== this.location) {
        e.style.display = 'none';
      }
    });
  }
}
