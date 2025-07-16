const menuBtn = document.querySelector("#menu-btn");
const navlink = document.querySelector(".nav-link");
const navs = document.querySelectorAll("#navs");
const logo = document.querySelector(".logo");
const password = document.querySelector("#password");
const username = document.querySelector("#username");
const pass = document.querySelector("#pass");
const login = document.querySelector("#login");
const light = document.querySelector("#light");
const body = document.querySelector("body");
const ctn = document.querySelector(".ctn");
const popup = document.querySelector(".popup");
const cancel = document.querySelector("#cancel");

// Login-form

ctn.addEventListener("click", () => {
  popup.style.display = "block";
});

cancel.addEventListener("click", () => {
  popup.style.display = "none";
});

// Password Show
let show = true;

pass.addEventListener("click", () => {
  if (show) {
    show = false;
    password.setAttribute("type", "text");
  } else {
    show = true;
    password.setAttribute("type", "password");
  }
});

login.addEventListener("click", () => {
  confirm(`Username:- ${username.value} 
password:- ${password.value}`);
});

// Nav-Links

menuBtn.addEventListener("click", () => {
  navlink.classList.toggle("mobile-menu");
});

for (let nav of navs) {
  nav.addEventListener("click", () => {
    navlink.classList.toggle("mobile-menu");
  });
}

// Dark-mode

let curr = "light";

light.addEventListener("click", () => {
  if (curr === "light") {
    curr = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    light.style.color = "white";
    menuBtn.style.color = "white";
    logo.style.color = "white";
  } else {
    curr = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    light.style.color = "black";
    menuBtn.style.color = "black";
    logo.style.color = "black";
  }
  console.log(curr);
});
