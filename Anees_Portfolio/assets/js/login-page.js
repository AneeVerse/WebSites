const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");




loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web") {
        alert("You have successfully logged in.");
        window.close();  
        window.open("My_Tools_&_Dashboard_CpUwp.^2&Cy6qgH-9zG/")
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})