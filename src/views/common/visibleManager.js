// 각 탭의 부모 클래스
// 보여주거나 숨기는 작업 컨트롤
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
