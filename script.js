const title = document.querySelector("span");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const vPassword = document.querySelector(".verify-password");
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");

const handleLogin = () => {
  if (email.value.includes("@gmail.com") || "@yahoo.com") {
    if (password.value >= 6) {
      console.log("da");
    }
  }
};

signup.addEventListener("click", (event) => {
  event.preventDefault();
  title.innerHTML = "Sign up to Faceit";
  vPassword.style.visibility = "visible";
});

login.addEventListener("click", (event) => {
  event.preventDefault();
  title.innerHTML = "Login to Faceit";
  vPassword.style.visibility = "hidden";
  handleLogin();
});

//TEMA:
//Daca valorile din login sunt corecte atunci o sa afisez mesajul cu
//text-ul validare corecta, altfel, daca valorile nu sunt corecte se afiseaza
//mesajul Email sau parola gresite.s
