class Store {
    constructor() {
        this.storage = localStorage.getItem('state');
        this.callback = () => {};

        if (this.storage !== null) {
            this.state = JSON.parse(this.storage);
        } else this.state = {};

        // window.onunload = () => localStorage.removeItem('state');
    }

    createStore(initialization) {
        if (this.storage !== null) return;

        this.state = { ...initialization };
        this.apply();
    }

    setState(key, value) {
        this.state = {
            ...this.state,
            [key]: value,
        };

        this.apply();
    }

    setStates(states) {
        this.state = {
            ...this.state,
            ...states,
        };

        this.apply();
    }

    getState(selector) {
        return selector(this.state);
    }

    apply() {
        localStorage.setItem('state', JSON.stringify(this.state));
        this.callback();
    }

    subscribe(callback) {
        this.callback = callback;
    }
}

const store = new Store();

export const createStore = store.createStore.bind(store);
export const subscribe = store.subscribe.bind(store);
export const setStates = store.setStates.bind(store);
export const setState = store.setState.bind(store);
export const getState = store.getState.bind(store);

export default store;
