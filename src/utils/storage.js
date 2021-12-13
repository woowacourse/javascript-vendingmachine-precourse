const loadStorage = (instance, parsed) => {
    instance.coins = parsed.coins;
    instance.input = parsed.input;
    instance.productId = parsed.productId;
    instance.products = parsed.products;
}

export const updateStorage = (instance) => {
    localStorage.machine = JSON.stringify(instance);
}

export const getStorage = () => {
    return JSON.parse(localStorage.machine);
}

export const checkStorage = (instance) => {
    if(localStorage.machine === undefined){
        localStorage.machine = JSON.stringify(instance);
    }else{
        let parsed = JSON.parse(localStorage.machine);
        loadStorage(instance, parsed);
    }
}