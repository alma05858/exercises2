const list = document.querySelector("ul");
// vi hiver fat i vores ul liste fra html så vi kan smide de li ind vi gerne vil have der
const columnArray = [];
// laver et tomt array hvor vi kan push vores værdier ind i

setInterval(generateColumns, 600);
// her laver vi et et tidsmellemrum fra være søjle der bliver vist

function generateColumns() {
  const value = Math.floor(Math.random() * 100);
  columnArray.push(value);
  // her har vi lavet en funktion hvor vi starter med at lave en konstant der hedder value
  // som bruger math random til at finde et tilfældigt tal mellem nul og 100 fordi det er round er det 0
  // derefter pusher vi det ind i vores tomme array

  const li = document.createElement("li");
  // her laver vi et li element i vores js
  li.style.setProperty("--height", value);
  // her sætter vi dens height fra vores sammen med vores value så det ændre på li elementet ud fra vores css
  list.appendChild(li);
  // her sætter vi det ind i html så det kan blive fremvist på siden

  if (columnArray.length > 20) {
    columnArray.shift;
    list.removeChild(list.firstElementChild);
  } // her laver vi en if sætning der tager længden på vores array og hvis det er over
  //20 fjerner den via shift det første element i arrayet
  // og for at at fjerne den på vores side/dom bruger vi remove child på det første i arrayet

  console.log(columnArray);
  // her logges arrayet i vores konsol
}
