import 'bootstrap';

const radioButtons = document.querySelectorAll('input[name="source"]');
const textareaDiv = document.querySelector('.other-text');
const otherText = document.getElementById('other-text');

document.addEventListener('DOMContentLoaded', () => {
  textareaDiv.style.display = 'none';
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