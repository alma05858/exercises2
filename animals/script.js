const animals = [
  {
    name: "Marcus",
    type: "dog",
  },

  {
    name: "Peter",
    type: "dog",
  },
  {
    name: "Anaas",
    type: "dog",
  },

  {
    name: "Agami",
    type: "cat",
  },

  {
    name: "Therese",
    type: "cat",
  },
  {
    name: "Josefine",
    type: "cat",
  },
];

function all(animal) {
  return true;
}

function none(animal) {
  return false;
}

console.log("alle", animals.filter(all));

console.log("ingen", animals.filter(none));

function isCat(animal) {
  if (animal.type === "cat") return true;
  else {
    return false;
  }
}

const onlyCats = animals.filter(isCat);
console.log("alle katte:", animals.filter(isCat), onlyCats);

function isDog(animal) {
  if (animal.type === "dog") return true;
  else {
    return false;
  }
}

console.log("alle hunde", animals.filter(isDog));
