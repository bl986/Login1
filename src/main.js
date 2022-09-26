document.addEventListener("DOMContentLoaded", ()=> {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", (event) => {
        event.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    })

    document.querySelector("#linkLogin").addEventListener("click", (event) => {
        event.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    })

    loginForm.addEventListener("submit", event => {
        event.preventDefault();
        setFromMessage(loginForm, "error", "Invalid username or password.")
    });


    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
                setInputError(inputElement, "Username must be at least 6 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


function setFromMessage (fromElement, type, message) {
    const messageElement = fromElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message--success", ".form-message--error")
    messageElement.classList.add('.form-message--${type}')
}

setFromMessage(loginForm, "success", "You are logged in!");


function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}


function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}