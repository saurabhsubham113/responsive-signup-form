const form = document.getElementById("form");

const formControl = document.querySelector(".form-control")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")

const button = document.querySelector(".btn")

form.addEventListener('submit', e => {
    e.preventDefault()

    checkInput()

})



const checkInput = () => {

    const fNameValue = firstName.value.trim()
    const lNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    let isfnameValid = false
    let islnameValid = false
    let isemailValid = false
    let ispasswordValid = false


    if (fNameValue === "" || fNameValue == null)
        isfnameValid = showError(firstName, true)
    else
        isfnameValid = showError(firstName, false)

    if (lNameValue === "" || lNameValue == null)
        islnameValid = showError(lastName, true)
    else
        islnameValid = showError(lastName, false)

    if (emailValue === "" || fNameValue == null)
        isemailValid = showError(email, true)
    else
        isemailValid = showError(email, false)

    if (passwordValue === "" || passwordValue == null)
        ispasswordValid = showError(password, true)
    else
        ispasswordValid = showError(password, false)


    if (!(isfnameValid || islnameValid || isemailValid || ispasswordValid)) {
        firstName.value = ""
        lastName.value = ""
        email.value = ""
        password.value = ""
        alert("sucessfully submitted")
    }
}

const showError = (input, isError) => {
    const formControl = input.parentElement

    if (isError)
        formControl.classList.add("error")
    else
        formControl.classList.remove("error")

    return isError
}
