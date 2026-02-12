"use strict";

const themeSelect = document.querySelector("#theme");
// hiver fat i dropdown ud fra dens id i html

themeSelect.addEventListener("change", (event) => {
  // lytter efter om der ændre sig i dropdown om der bliver valgt noget nyt
  const selected = event.target.value;
  // henter valuen
  document.body.setAttribute("data-theme", selected);
  // opdatere i body
});
