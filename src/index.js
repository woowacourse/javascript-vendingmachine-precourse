import { domSelector } from './common/index.js';
import App from './components/App.js';
import Store from './store/index.js';

class VendingMachine {
    constructor() {
        this.target = domSelector('#app');
        this.app = new App(this.target);

        Store.setTriggerStateChange(() => this.app.render());
    }
}

export default new VendingMachine();
