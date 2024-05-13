const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(info){
    info.preventDefault();
    console.log(info);
}

loginForm.addEventListener("submit",onLoginSubmit);


