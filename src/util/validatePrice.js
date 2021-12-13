function validatePrice(input) {
    return (input % 10) === 0 && input >= 100;
}

export default validatePrice;
