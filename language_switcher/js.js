"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

const languageSelect = document.querySelector("#language");
// hiver fat i drop down menuen gennem id

languageSelect.addEventListener("change", (event) => {
  const selected = event.target.value;
  // her lytter den efter den value vi har i dropdown menuen og ændre sig efter det valgte

  if (selected && texts[selected]) {
    updateLanguage(selected);
  }
  // her opdateres sproget hvis det er valgt og der er en text der matcher til
});

function updateLanguage(language) {
  // funktionen der opdatere sproget
  const langText = texts[language].texts;
  // her hives der fat i de tekster der skal opdateres inden for det valgte sprog

  langText.forEach((obj) => {
    // her går den så igennem hvert objekt i arrayet
    const element = document.querySelector(obj.location);
    // her hives der fat i det valte tekst location i htmlen
    if (element) {
      // hvis det findes på siden
      element.textContent = obj.text;
    }
    // så opdateres det så her
  });
}
