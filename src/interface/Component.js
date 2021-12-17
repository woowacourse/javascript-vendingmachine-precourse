import { getState, setState, setStates } from '../store/index.js';

export default class Component {
    $target;

    $props;

    $state;

    constructor($target, $props) {
        this.$target = $target;
        this.$props = $props;
        this.$state = null;
        this.setState = setState;
        this.setStates = setStates;
        this.getState = getState;
        this.setup();
        this.render();
    }

    template() {}

    setup() {}

    mount() {}

    render() {
        this.$target.innerHTML = this.template();
        this.mount();
    }
}