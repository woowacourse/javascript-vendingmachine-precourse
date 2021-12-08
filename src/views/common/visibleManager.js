class VisibleManager {
  constructor(elementId) {
    this.$element = document.getElementById(elementId);
  }

  show() {
    this.$element.hidden = false;
  }

  hide() {
    this.$element.hidden = true;
  }
}

export default VisibleManager;
