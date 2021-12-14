export function cleanInputValue(...inputArray) {
    for (let input of inputArray) {
        input.value = '';
    }
}