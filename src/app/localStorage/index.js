export const getJsonItem = (key) => {
    const json = localStorage.getItem(key);

    return json ? JSON.parse(json) : [];
};

export const appendToJsonItem = (key, item) => {
    const json = getJsonItem(key);

    json.push(item);
    localStorage.setItem(key, JSON.stringify(json));
};
