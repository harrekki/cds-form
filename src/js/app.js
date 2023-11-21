import 'bootstrap';
import * as bootstrap from 'bootstrap';
window.Modal = bootstrap.Modal;

const promoInput = document.getElementById('promo');
const radioButtons = document.querySelectorAll('input[name="source"]');
const textareaDiv = document.querySelector('.other-text');
const otherText = document.getElementById('other-text');
const legend = document.getElementById('referral');

// Set styles on page load
document.addEventListener('DOMContentLoaded', () => {
  textareaDiv.style.display = 'none';
  legend.classList.add('required');
})

// Display and requre other textarea if other radio button is selected
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
        referral.classList.remove('required');
    } else {
        radioButtons.forEach(radioButton => radioButton.required = true);
        referral.classList.add('required');
    }
})

// Disable form submission if there are invalid fields
const form = document.querySelector('.needs-validation');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
        const successModal = new bootstrap.Modal(document.getElementById('success-modal'));
        successModal.show();
        form.classList.remove('was-validated')
        document.querySelector('form').reset();
    }

});