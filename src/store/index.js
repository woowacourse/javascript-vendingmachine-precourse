export default class Store {
    constructor(component, initialState) {
        if (localStorage.getItem('state') === undefined) {
            localStorage.setItem('state', JSON.stringify({ ...initialState }));
        }
        this.state = JSON.parse(localStorage.getItem('state'));
        this.component = component;
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
        this.component.render(this.state);
    }

    getState(selector) {
        return selector(this.state);
    }
}
