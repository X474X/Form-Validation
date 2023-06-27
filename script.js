const title = document.querySelector("span");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const vPassword = document.querySelector(".verify-password");
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const validare = document.querySelector("p");

let newEmail = "";
let newPassword = "";
let currentPage = "login";

const handleLogin = () => {
  if (email.value === newEmail) {
    if (password.value === newPassword) {
      validare.style.visibility = "visible";
      validare.innerHTML = " Va-ti logat cu succes";
      setTimeout(() => {
        validare.style.visibility = "hidden";
      }, 1000);
    } else {
      validare.style.visibility = "visible";
      validare.innerHTML = " Email sau parola gresita";
      setTimeout(() => {
        validare.style.visibility = "hidden";
      }, 1000);
    }
  } else {
    validare.style.visibility = "visible";
    validare.innerHTML = " Email sau parola gresita";
    setTimeout(() => {
      validare.style.visibility = "hidden";
    }, 1000);
  }
  email.value = "";
  password.value = "";
};

const handleSignup = () => {
  if (
    email.value.includes("@gmail.com") ||
    email.value.includes("@yahoo.com")
  ) {
    if (password.value.length >= 6 && vPassword.value === password.value) {
      validare.style.visibility = "visible";
      validare.innerHTML = "Crearea contului a fost cu succes";
      setTimeout(() => {
        validare.innerHTML = " ";
      }, 1000);
      newEmail = email.value;
      newPassword = password.value;
    }
  }
  email.value = "";
  password.value = "";
  vPassword.value = "";
  console.log(newEmail, newPassword);
};

signup.addEventListener("click", (event) => {
  event.preventDefault();
  title.innerHTML = "Sign up to Faceit";
  vPassword.style.visibility = "visible";
  currentPage = "signUp";
  if (
    email.value.length > 0 &&
    password.value.length > 0 &&
    vPassword.value.length > 0
  ) {
    if (currentPage === "signUp") {
      handleSignup();
    }
  } else {
    email.value = "";
    password.value = "";
    vPassword.value = "";
  }
});

login.addEventListener("click", (event) => {
  event.preventDefault();
  title.innerHTML = "Login to Faceit";
  vPassword.style.visibility = "hidden";
  if (currentPage === "signUp") {
    email.value = "";
    password.value = "";
    setTimeout(() => {
      currentPage = "login";
    }, 1000);
  }
  if (email.value.length > 0 && password.value.length > 0) {
    if (currentPage === "login") {
      handleLogin();
    }
  }
});
