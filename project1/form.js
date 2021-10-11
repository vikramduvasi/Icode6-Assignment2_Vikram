let name = document.getElementById("name");
let firstName = document.getElementById("firstName");
let phNumber = document.getElementById("phNumber");
let email = document.getElementById("email");
let message = document.getElementById("message");
let form = document.getElementById("form");
//const errorElement = document.getElementById("error");

//----------Modal elements-----------

const modal = document.querySelector(".modal-content")
const body = document.querySelector("body")
const modalOverlay = document.querySelector(".modal-overlay")



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

    else if (!isValidPhNumber(phNumber.value.trim())) {
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

    else if (!isValidMessage(message.value.trim())) {
        onError(message, "Message should have alteast two words")
    }

    else {
        onSuccess(message);
        // openModal();
    }

    if (isValidName(name.value.trim()) && isValidName(firstName.value.trim()) && isValidPhNumber(phNumber.value.trim())
        && isValidEmail(email.value.trim()) && isValidMessage(message.value)) {
        console.log("Modal open")
        openModal()
        console.log(`
        Name:      ${name.value}
        FirstName: ${firstName.value} 
        PhoneNumber: ${phNumber.value}
        Email:       ${email.value}
        message:     ${message.value}
        `)
        form.reset();

    }
    else {
        console.log("Oops something went wrong")
    }
}




document.getElementById("form-button").addEventListener('click', (event) => {
    event.preventDefault();
    validateInput();
    // openModal();
});

document.getElementById("close-modal").addEventListener('click', (event) => {
    closeModal();
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
// const phNumberRegex = /^((\+)33|0)[1-9](\d{2}){4}$/;

// ----------------Australian Ph number validation ---------
const phNumberRegex = /(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^0[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)/

//const EmailRegex = (?: [a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]) ;
//const EmailRegex = / (?: [a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]) /;
//const EmailRegex = /^ [a - zA - Z0 - 9.!#$ %& '*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// same regex function isValid() for both name and first Name

//  ----------message regex---------

//const messageRegex = /(.+)((\r?\n.+)*)/gm

const messageRegex = /\w+\s\w+/
function isValidName(name) {
    return nameRegex.test(name)
}


function isValidPhNumber(number) {
    return phNumberRegex.test(number)
}

function isValidEmail(email) {
    return emailRegex.test(email)
}

function isValidMessage(message) {
    return messageRegex.test(message)
}

// -------modal functionlity--------------

function openModal() {
    modal.classList.add("active")
    body.classList.add("modal-open")
    // modalOverlay.classList.add("active")

}

function closeModal() {
    modal.classList.remove("active")

    body.classList.remove("modal-open")
    modalOverlay.classList.remove("active")
}