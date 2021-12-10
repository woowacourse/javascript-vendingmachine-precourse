import Component from '../base/Component.js';

class ChangesCharge extends Component {
  constructor() {
    super(document.createElement('div'));
  }

  render() {
    this.renderText('TODO: 잔돈 충전');
  }
}

export default ChangesCharge;
