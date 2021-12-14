export const getJsonItem = (key, defaultVal = []) => {
    const json = localStorage.getItem(key);

    return json ? JSON.parse(json) : defaultVal;
};

export const setJsonItem = (key, json) => {
    localStorage.setItem(key, JSON.stringify(json));
};

export const appendToJsonItem = (key, item) => {
    const json = getJsonItem(key);

    json.push(item);
    setJsonItem(key, json);
};

export const getNumber = (key) => Number(localStorage.getItem(key)) || 0;