const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.target;
  console.log({ email: email.value, message: message.value });
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
});

formEl.addEventListener(
  'input',
  throttle(e => {
    formData[e.target.name] = e.target.value;
    handleInputFormValue();
  }, 500)
);

function handleInputFormValue() {
  const inputValue = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, inputValue);
}
populateForm();
function populateForm() {
  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedForm) {
    formEl.elements.email.value = savedForm.email;
    formEl.elements.message.value = savedForm.message;
  }
}
