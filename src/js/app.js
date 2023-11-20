import 'bootstrap';

const promoInput = document.getElementById('promo');
const radioButtons = document.querySelectorAll('input[name="source"]');
const textareaDiv = document.querySelector('.other-text');
const otherText = document.getElementById('other-text');

document.addEventListener('DOMContentLoaded', () => {
  textareaDiv.style.display = 'none';
})

promoInput.addEventListener('input', () => {
    const referral = document.getElementById('referral');
    const requiredElem = `<span class="required">*</span>`;

    if(promoInput.value) {
        radioButtons.forEach(radioButton => radioButton.required = true);
        referral.innerHTML += requiredElem;
    } else {
        radioButtons.forEach(radioButton => radioButton.required = false);
        referral.innerHTML = "How did you hear about us?"
    }
})

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', event => {
    if(event.target.value === "other") {
      textareaDiv.style.display = '';
      otherText.required = true;
      console.log(otherText)
    } else {
      textareaDiv.style.display = 'none';
      otherText.required = false;
      console.log(otherText)
    }
  })
})
