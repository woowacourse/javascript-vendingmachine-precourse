export function setDataInLocalStorage(name, data) {
    window.localStorage.setItem(name, data);
};

export function getDataInLocalStorage(name) {
    return window.localStorage.getItem(name);
};