import defaultStatus from './defaultStatus.js';

class Store {
    constructor(initialState) {
        if (localStorage.getItem('state') === null) {
            localStorage.setItem('state', JSON.stringify({ ...initialState }));
        }
        this.state = JSON.parse(localStorage.getItem('state'));

        window.onbeforeunload = function () {
            localStorage.removeItem('state');
        };
    }

    setTriggerStateChange(func) {
        this.afterStateChange = func;
    }

    setState(key, value) {
        if (typeof key !== 'string') throw 'setState: parameter type error';

        this.state = {
            ...this.state,
            [key]: value,
        };

        this.applyLocalStorage();
    }

    setStates(state) {
        if (state.length === undefined) throw 'setState: parameter type error';

        Object.keys(state).forEach((key) => {
            this.state[key] = state[key];
        });

        this.applyLocalStorage();
    }

    applyLocalStorage() {
        localStorage.setItem('state', JSON.stringify(this.state));
        this.afterStateChange(this.state);
    }

    getState(selector) {
        return selector(this.state);
    }
}

const store = new Store(defaultStatus);

export function setState(key, value) {
    store.setState(key, value);
}
export function setStates(states) {
    store.setStates(states);
}
export function getState(selector) {
    return store.getState(selector);
}

export default store;
