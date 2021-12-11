/**
 * 1. 값을 숫자인지 아닌지 확인
 * 2. 값이 양의 정수인지 확인
 * 3. 값이 10으로 나누어 떨어지지 않는지 확인
 * 4. 동일한 이름의 값이 존재하는지
 */

export const checkIsNaN = (value) => {
    return !isNaN(Number(value));
};

export const overZero = (value) => {
    return Number(value) > 0 ? true : false;
};

export const divideTen = (value) => {
    return Number(value) % 10 === 0 ? true : false;
};

export const checkDuplicate = (value, names) => {
    return names.includes(value);
};
