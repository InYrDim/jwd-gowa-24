function onAction(elementTrigger, elementUpdate, elementToggle, cb) {
  const trigger = document.getElementById(elementTrigger);
  function onClick(e) {
    const formContainer = document.getElementById(elementUpdate);
    formContainer.classList.toggle(elementToggle);

    if (cb) cb(e);
  }
  trigger.addEventListener("click", onClick);
}
function onRegisterAction() {
  onAction("register-action", "register-form", "form-toggler");
}
function onExitAction() {
  onAction("form-exit", "register-form", "form-toggler");
}

onRegisterAction();
onExitAction();
