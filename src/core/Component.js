import { $ } from '../utils/element-tools.js';

export default class Component {
  constructor($target, props) {
    this.$target = $target;
    this._state = {};
    this._props = props;

    this.init();
    this.bindEvent();
    this.render();
  }

  // 컴포넌트를 생성 시 기본 변수들을 설정한다.
  init() {}

  // 자식 컴포넌트를 등록한다.
  mounted() {}

  // 해당 컴포넌트의 HTML 템플릿을 설정한다.
  htmlTemplate() {
    return '';
  }

  // 해당 컴포넌트의 DOM 템플릿을 설정한다.
  domTemplate() {
    return '';
  }

  // 화면을 그려준다.
  render() {
    this.$target.innerHTML = this.htmlTemplate();
    this.$target.append(this.domTemplate());
    this.mounted();
  }

  // 이벤트를 등록한다.
  bindEvent() {}

  // 이벤트 위임을 간소화한다.
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }

  // 자식 컴포넌트를 추가한다.
  addMount(componentName, ComponentClass, props = {}) {
    new ComponentClass(
      $(`.component[data-component="${componentName}"]`),
      props
    );
  }
}
