const NameField = document.getElementById('name')
const errName = document.getElementById('errName')
const EmailField = document.getElementById('email')
const errEmail = document.getElementById('errEmail')
const PhoneField = document.getElementById('phone')
const errPhone = document.getElementById('errPhone')
const ProjectField = document.getElementById('project')
const errProject = document.getElementById('errProject')
const submitForm = document.getElementById('form')
const submitButton = document.getElementById('submit')
let isValidName = false
let isValidEmail = false
let isValidPhone = false
let isValidProject = false
let formValid = false
const isValid = 'valid'
const isInvalid = 'invalid'

NameField.addEventListener('keyup', (event) => {
    isValidName = NameField.checkValidity()
    isValidName ? NameField.className = isValid : NameField.className = isInvalid
    errName.innerHTML = NameField.validationMessage
    formValid = isValidName && isValidEmail && isValidPhone && isValidProject
});

EmailField.addEventListener('keyup', (event) => {
    isValidEmail = EmailField.checkValidity()
    isValidEmail ? EmailField.className = isValid : EmailField.className = isInvalid
    errEmail.innerHTML = EmailField.validationMessage
    formValid = isValidName && isValidEmail && isValidPhone && isValidProject
});

PhoneField.addEventListener('keyup', (event) => {
    isValidPhone = PhoneField.checkValidity()
    isValidPhone ? PhoneField.className = isValid : PhoneField.className = isInvalid
    errPhone.innerHTML = PhoneField.validationMessage
    formValid = isValidName && isValidEmail && isValidPhone && isValidProject
});

ProjectField.addEventListener('keyup', (event) => {
    isValidProject = ProjectField.checkValidity()
    isValidProject ? ProjectField.className = isValid : ProjectField.className = isInvalid
    errProject.innerHTML = ProjectField.validationMessage
    formValid = isValidName && isValidEmail && isValidPhone && isValidProject
});

document.addEventListener('keyup', () => {
    console.log(isValidName, isValidEmail, isValidPhone, isValidProject, formValid)
    formValid ? submitButton.disabled = false : submitButton.disabled = true
})

submitButton.addEventListener('click', (event) => {
    submitForm.submit();
});