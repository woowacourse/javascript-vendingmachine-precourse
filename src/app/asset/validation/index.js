import ERROR_MSG from '../constants/ERROR_MSG.js';
import INPUT_NUMBER_RULE from '../constants/INPUT_NUMBER_RULE.js';

// 숫자 여부
const isNumber = (value) => Number(value) || Number(value) === 0;

// 자연수 여부
const isNaturalNumber = (value) => value > 0;

// mod로 나뉘는지 여부
const isModed = (value) => value % INPUT_NUMBER_RULE.mod === 0;

export const createValidFunction = (checkFunction, msg) => (value) => {
    if (!checkFunction(value)) {
        alert(msg);
        return false;
    }

    return true;
};

export const createCheckEveryFunction = (checkFunctions) => (value) =>
    checkFunctions.every((checkFunction) => checkFunction(value));

// 입력 여부
export const isRequired = (value) => value !== '';

// 숫자 검증
export const checkNumber = createValidFunction(isNumber, ERROR_MSG.number);

// 자연수 검증
export const checkNaturalNumber = createValidFunction(isNaturalNumber, ERROR_MSG.naturalNumber);

// mod로 나뉘는지 검증
export const checkModed = createValidFunction(isModed, ERROR_MSG.mod);
