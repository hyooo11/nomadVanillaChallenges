const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
  event.preventDefault();
  // const username = loginForm.value;
  console.log(loginInput.value);
}

function hadleLinkClick(event){
  event.preventDefault();
  console.dir(event);
  alert("clicked!");
};

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", hadleLinkClick);

