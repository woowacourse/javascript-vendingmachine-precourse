import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';

class ChangesCharge extends Component {
  constructor() {
    super($tag('div'));
  }

  render() {
    this.renderText('TODO: 잔돈 충전');
  }
}

export default ChangesCharge;
