function validateCharge(input) {
    return (input % 10) === 0 && input >= 10;
}

export default validateCharge;
