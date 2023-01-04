/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Obtener el elemento
  let form = document.querySelector("form");
  // manipular el elemento
  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let amount = document.getElementById("amount");
    let address1 = document.getElementById("address1");
    let address2 = document.getElementById("address2");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let zip = document.getElementById("zip");
    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");
    let radio3 = document.getElementById("radio3");
    let radio4 = document.getElementById("radio4");
    let textarea = document.getElementById("textarea");
    let alert = document.getElementById("alert");

    if (email.value === "") {
      alert.style.display = "";
      email.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
    }

    if (password.value === "") {
      alert.style.display = "";
      password.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
    }

    if (amount.value === "") {
      alert.style.display = "";
      amount.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
    }

    if (address1.value === "") {
      alert.style.display = "";
      address1.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
    }

    if (address2.value === "") {
      alert.style.display = "";
      address2.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
    }

    if (city.value === "") {
      alert.style.display = "";
      city.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
    }

    if (state.value === "") {
      alert.style.display = "";
      state.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
    }

    if (zip.value === "") {
      alert.style.display = "";
      zip.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
    }

    if (radio1.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }

    if (radio2.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }

    if (radio3.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }

    if (radio4.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }

    if (textarea.value === "") {
      alert.style.display = "";
      textarea.style.backgroundColor = "lightcoral";
    } else {
      alert.style.display = "none";
    }
  }
};
