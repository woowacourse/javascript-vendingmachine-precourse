export default class Router {
  constructor(target, location) {
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
