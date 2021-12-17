export const typeMessage = {
    syntax: 'Syntax Error',
    type: 'Type Error',
    already: 'Already Defined',
};
export const alertMessage = {};

export const customError = (type, message) => new Error(`${typeMessage[type]}: ${message}`);

export const setError = (type) => alert(type);
