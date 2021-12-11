import { ELEMENT_ID } from '../../constants/index.js';
import { productAppendInputValidator } from '../../utils/inputValidator.js';
import { handleError } from '../../utils/errorHandler.js';
import { $tag } from '../../utils/index.js';
import { parseString, parseNumber } from '../../utils/inputParser.js';
import Button from '../base/Button.js';
import Component from '../base/Component.js';
import Input from '../base/Input.js';
import Label from '../base/Label.js';

const inputPropsList = [
  {
    id: ELEMENT_ID.PRODUCT_MANAGE_NAME_INPUT,
    placeholder: '상품명',
  },
  {
    id: ELEMENT_ID.PRODUCT_MANAGE_PRICE_INPUT,
    placeholder: '가격',
    type: 'number',
  },
  {
    id: ELEMENT_ID.PRODUCT_MANAGE_QUANTITY_INPUT,
    placeholder: '수량',
    type: 'number',
  },
];

class ProductAppend extends Component {
  $title;

  $inputs;

  $submit;

  onSubmit;

  constructor() {
    super($tag('div'));

    this.$title = new Label('h3', '상품 추가하기');
    this.$inputs = inputPropsList.map((prop) => new Input(prop));
    this.$submit = new Button('추가하기', {
      id: ELEMENT_ID.PRODUCT_MANAGE_ADD_BUTTON,
    });
    this.setEvent();
    this.children = [this.$title, ...this.$inputs, this.$submit];
  }

  resetInputs() {
    this.$inputs.forEach(($input) => {
      $input.resetValue();
    });
  }

  #getProductInput() {
    return {
      name: this.$inputs[0].value,
      price: this.$inputs[1].value,
      count: this.$inputs[2].value,
    };
  }

  setEvent() {
    this.$submit.setOnClick(() => {
      const productInput = this.#getProductInput();

      const result = productAppendInputValidator.run(productInput);
      if (!result.isSuccess) {
        handleError(result.rejectType);
        return;
      }

      this.onSubmit?.({
        name: parseString(productInput.name),
        price: parseNumber(productInput.price),
        count: parseNumber(productInput.count),
      });
    });
  }
}

export default ProductAppend;
