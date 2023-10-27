//According to the assignment, it was used Event listener, For loop, and Function.

document.getElementById("btnSubscribe").addEventListener("click", (event) => {
    var email = document.getElementById("newsletter1")
    email = email.value
    if (validateEmpetyText(email)) {
        alert("Write your email first")
    } else {
        alert("Thank for signing the Newsletter!")
    }
})

//Get the form element and add Event listener to check if the input form is filled 
var form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    var inputs = form.querySelectorAll("input")
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i] && validateEmpetyText(inputs[i].value)) {
            alert("Please complete the form")
            return
        }
    }
    form.submit();
})

// Function to validate the empty text
function validateEmpetyText(text) {
    return !text
}