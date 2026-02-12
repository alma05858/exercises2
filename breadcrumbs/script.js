const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// mit array

function opretStigen(data) {
  const nav = document.getElementById("stig");
  // opretter funktion

  nav.innerHTML = "";
  //fjerner html hvis der skulle være noget

  data.forEach((variant, index) => {
    const udenLink = index === data.length - 1;
    // hiver fat i det sidste elemt i array'et

    if (udenLink) {
      const text = document.createTextNode(variant.name);
      nav.appendChild(text);
    } else {
      const link = document.createElement("a");
      link.href = variant.link;
      link.textContent = variant.name;
      nav.appendChild(link);
      // her siger jeg så at det sidste element bare skal have navnet fra dataen med if
      // også else if skal alt andet end det sidste være link

      nav.appendChild(document.createTextNode(" / "));
      //tilføjer bindestrgen
    }
  });
}

document.getElementById("btn").addEventListener("click", function () {
  opretStigen(bc);
});
// min eventlistener på min knap der får functionen frem med text via innerhtml
