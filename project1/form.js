let name = document.getElementById("name");
let firstName = document.getElementById("firstName");
let phNumber = document.getElementById("phNumber");
let email = document.getElementById("email");
let message = document.getElementById("message");
//const errorElement = document.getElementById("error");

//let form = document.getElementById("form");

function validateInput() {
    // console.log("Validate input");
    // Name Validations
    if (name.value.trim() === "") {
        onError(name, "Name Cannot be empty");
    }
    else if (!isValidName(name.value.trim())) {
        onError(name, "Name is not in valid format. Please enter a valid Name");
    }
    else {
        onSuccess(name);
    }

    // firstName Validations

    if (firstName.value.trim() === "") {
        onError(firstName, "First Name Cannot be emepty");
    }

    else if (!isValidName(firstName.value.trim())) {
        onError(firstName, "First Name is not in valid format. Please enter a valid First Name")
    }
    else {
        onSuccess(firstName);
    }

    // Ph Number Validations

    if (phNumber.value.trim() === "") {
        onError(phNumber, "Ph Number Cannot be empty");
    }

    else if (!isValidName(phNumber.value.trim())) {
        onError(phNumber, " Phone Number is not in valid format. Please enter a valid Phone Number ")
    }

    else {
        onSuccess(phNumber);
    }

    // Email Validations


    if (email.value.trim() === "") {
        onError(email, "Email Cannot be emepty");
    }

    else if (!isValidEmail(email.value.trim())) {
        onError(email, "Email is not in valid format. Please enter a valid Email")
    }
    else {
        onSuccess(email);
    }

    // Message Validations

    if (message.value.trim() === "") {
        onError(message, "Message cannot be empty")
    }

    else {
        onSuccess(message);
    }
}




document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    validateInput();
});

function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    messageEle.innerText = "";
    parent.classList.remove("error");
    parent.classList.add("success");

}

function onError(input, errorMessage) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = errorMessage;
    parent.classList.remove("success");
    parent.classList.add("error");

}

//const nameRegex = ^ [\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$; 
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)/;

// ------------French Ph Number Validation Regex-------
const phNumberRegex = /^((\+)33|0)[1-9](\d{2}){4}$/;

//const EmailRegex = (?: [a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]) ;
//const EmailRegex = / (?: [a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]) /;
//const EmailRegex = /^ [a - zA - Z0 - 9.!#$ %& '*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;

// same regex function isValid() for both name and first Name
function isValidName(name) {
    return nameRegex.test(name)
}


function isValidPhNumber(number) {
    return phNumberRegex.test(number)
}

function isValidEmail(email) {
    return EmailRegex.test(email)
}


