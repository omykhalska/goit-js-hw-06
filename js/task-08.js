const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert(`All the fields must be filled in`);
  }

  console.log({ email: email.value, password: password.value });

  event.currentTarget.reset();
}
