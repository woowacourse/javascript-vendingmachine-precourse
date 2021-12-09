import SubTitle from '../SubTitle/index.js';

const FormInput = ($input, $button) => {
    const $wrap = document.createElement('div');

    $wrap.append($input);
    $wrap.append($button);

    return $wrap;
};

const GuideWrap = (guideText, $guideValueWrap) => {
    const $wrap = document.createElement('p');
    const $guide = document.createElement('span');

    $wrap.style.marginTop = '10px';
    $guide.append(`${guideText}:`);
    $wrap.append($guide);
    $wrap.append($guideValueWrap);

    return $wrap;
};

const SubmitForm = (subTitleText, $input, $button, guideText, $guideValueWrap) => {
    const $wrap = document.createElement('div');

    $wrap.style.marginBottom = '15px';
    $wrap.append(SubTitle(subTitleText));
    $wrap.append(FormInput($input, $button));
    $wrap.append(GuideWrap(guideText, $guideValueWrap));

    return $wrap;
};

export default SubmitForm;
