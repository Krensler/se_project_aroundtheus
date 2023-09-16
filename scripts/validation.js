function showInputError(formElement, inputElement, options) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.add(options.inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(options.errorClass);
}

function hideInputError(formElement, inputElement, options) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.remove(options.inputErrorClass);
  errorMessageElement.textContent.reset;
  errorMessageElement.classList.remove(options.errorClass);
}

function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputElement) => inputElement.validity.valid);
}

function disableButton(submitButton, options) {
  submitButton.classList.add(options.inactiveButtonClass);
  submitButton.disabled = true;
}

function enableButton(submitButton, options) {
  submitButton.classList.remove(options.inactiveButtonClass);
  submitButton.disabled = false;
}

function toggleButtonState(inputElements, submitButton, options) {
  if (hasInvalidInput(inputElements)) {
    disableButton(submitButton, options);
  } else {
    enableButton(submitButton, options);
  }
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [
    ...formElement.querySelectorAll(options.inputSelector),
  ];
  const submitButton = formElement.querySelector(options.submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputElements, submitButton, options);
    });
  });
}

function enableValidation(options) {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, options);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
