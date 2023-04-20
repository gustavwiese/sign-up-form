"use strict";

window.addEventListener("load", start);

function start() {
  console.log("JavaScript kører");
  document.querySelector("form#signup").addEventListener("submit", clickSubmit);
}

function clickSubmit(event) {
  event.preventDefault();
  console.log("Click Submit");
  const elements = document.querySelector("form#signup").elements;
  const signup = {
    fullname: elements.namedItem("fname").value,
    email: elements.namedItem("email").value,
    username: elements.namedItem("username").value,
    password: elements.namedItem("password").value,
    payment: elements.namedItem("payment").value,
    newsletter: elements.namedItem("emailYes").value,
    terms: elements.namedItem("terms").value,
  };
  console.log(signup);
}
