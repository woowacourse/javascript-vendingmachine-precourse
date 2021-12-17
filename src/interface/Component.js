import { $ } from '../common/utils.js';
import config from '../constants/configuration.js';
import resources from '../constants/resources.js';
import selectors from '../constants/selectors.js';

export default class Component {
    constructor(target, props) {
        this.target = target;
        this.props = props;

        if (props?.key) {
            this.key = props.key;
            this.resources = resources[this.key];
            this.selectors = selectors[this.key];
            this.config = config[this.key];
        }

        this.eventAttr = selectors.COMMON.EVENT_DATA_KEY;
        this.setup();
    }

    setup() {}

    mount() {}

    willmount() {}

    template() {}

    render() {
        this.willmount();
        $(this.target).innerHTML = this.template();
        this.mount();
    }
}
