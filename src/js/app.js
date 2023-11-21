import 'bootstrap';
import * as bootstrap from 'bootstrap';
window.Modal = bootstrap.Modal;

const textareaDiv = document.querySelector('.other-text');
const legend = document.getElementById('referral-title');

// Set styles on page load
document.addEventListener('DOMContentLoaded', () => {
  textareaDiv.style.display = 'none';
  legend.classList.add('required');
})

const promoInput = document.getElementById('promo');
const radioButtons = document.querySelectorAll('input[name="source"]');
const otherText = document.getElementById('other-text');

// Display and requre other textarea if "other" radio button is selected
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', event => {
    if(event.target.value === "other") {
      textareaDiv.style.display = '';
      otherText.required = true;
    } else {
      textareaDiv.style.display = 'none';
      otherText.required = false;
    }
  })
})

// Set referral radio buttons as required if promo code input is empty
promoInput.addEventListener('input', () => {
    // TODO require promoInput.value to be alphanumeric to require (regexp?) 
    if(promoInput.value) {
        radioButtons.forEach(radioButton => radioButton.required = false);
        legend.classList.remove('required');
    } else {
        radioButtons.forEach(radioButton => radioButton.required = true);
        legend.classList.add('required');
    }
})

const form = document.querySelector('.needs-validation');

// Disable form submission if there are invalid fields
form.addEventListener('submit', event => {
    event.preventDefault();
    
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
        const successModal = new bootstrap.Modal(document.getElementById('success-modal'));
        successModal.show();
        // removing class to prevent messages after form is submitted
        form.classList.remove('was-validated');
        document.querySelector('form').reset();
    }

});