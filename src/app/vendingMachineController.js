/** Controller */
class VendingMachineController {
  constructor({ view, model }) {
    this.$view = view;
    this.$model = model;

    this.initView();
    this.registerTabEventHandler();
  }

  initView() {
    this.$view.renderMain(this.$model);
  }

  registerTabEventHandler() {
    this.$view.tabMenuSection.addEventListener('click', this.onClickTabMenuSection.bind(this));
  }

  onClickTabMenuSection(e) {
    const {
      target: { textContent },
    } = e;

    this.$model.setTab(textContent);

    this.$view.renderMain(this.$model);
  }
}
export default VendingMachineController;
