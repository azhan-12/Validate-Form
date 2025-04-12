let fullName = document.getElementById("Full_Name");
let userName = document.getElementById("Username");
let email = document.getElementById("Email");
let password = document.getElementById("Password");
let cPassword = document.getElementById("Con_password");

let nameValue = document.getElementById("namevalue");
let userValue = document.getElementById("uservalue");
let emailValue = document.getElementById("emailvalue");
let passwordValue = document.getElementById("passvalue");
let conpassValue = document.getElementById("conpassvalue");

function formValue() {
    let isValid = true;

    if (fullName.value === "") {
        nameValue.textContent = "Full Name is Required";
        isValid = false;
    } else {
        nameValue.textContent = "";
    }

    if (userName.value === "") {
        userValue.textContent = "Username is Required";
        isValid = false;
    } else {
        userValue.textContent = "";
    }

    if (email.value.includes("@")) {
        emailValue.textContent = "";
    } else {
        emailValue.textContent = "Valid Email is Required";
        isValid = false;
    }

    if (password.value === "") {
        passwordValue.textContent = "Enter password";
        isValid = false;
    } else if (password.value.length < 8) {
        passwordValue.textContent = "Password must be at least 8 characters";
        isValid = false;
    } else {
        passwordValue.textContent = "";
    }

    if (cPassword.value === "") {
        conpassValue.textContent = "Enter confirm password";
        isValid = false;
    } else if (password.value.length < 8) {
        passwordValue.textContent = "Password must be at least 8 characters";
        isValid = false;
    } else if (password.value !== cPassword.value) {
        conpassValue.textContent = "Passwords do not match";
        isValid = false;
    } else {
        conpassValue.textContent = "";
    }

    if (isValid) {
        setTimeout(() =>{
            alert("Registration successful!");

        },1000)
    }
}
