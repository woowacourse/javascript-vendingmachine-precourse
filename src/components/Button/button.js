import { MARGIN } from "../../utils/constant.js";

const Button = (text, id) => {
    const button = document.createElement('button');
    button.innerText = text;
    button.setAttribute('id',id);
    button.style.margin = MARGIN;
    return button;
}

export default Button;