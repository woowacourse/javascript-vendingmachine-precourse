import { $ } from './common/utils.js';
import { defaultStatus } from './constants/index.js';
import { addEventType, watch } from './eventBus/index.js';
import App from './routes/App.js';
import { createStore, subscribe } from './store/index.js';

(function () {
    createStore(defaultStatus);

    const rootComponent = new App('#app', { key: 'COMMON' });

    subscribe(() => rootComponent.render());

    watch($('#app'));
    addEventType('click', 'change', 'submit');

    rootComponent.render();
})();
