//입력창 비우기
export function cleanInputValue(...inputArray){
    for(let input of inputArray){
        input.value = '';
    }
}