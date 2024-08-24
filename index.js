const email = document.querySelector("#email");
const submit = document.querySelector("#submit");
const emailError = document.querySelector("#email-error");
const successDialog = document.querySelector("#success-dialog");
const successDialogEmail = document.querySelector(".success-dialog__email");

email.addEventListener("change", () => {
  if (email.value !== "" && email.validity.typeMismatch) {
    emailError.textContent = "Valid email required";
  } else {
    emailError.textContent = "";
  }
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (email.validity.valid) {
    successDialogEmail.textContent = email.value;
    email.value = "";
    successDialog.showModal();
  } else {
    emailError.textContent = "Valid email required";
  }
});

dismiss.addEventListener("click", () => {
  successDialog.close();
});
