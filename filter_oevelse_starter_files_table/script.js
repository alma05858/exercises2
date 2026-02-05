document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", click);
});

function click(evt) {
  evt.target;
  console.log("jjj", evt.target.dataset.filter);
  if (evt.target.dataset.filter === "showElectric") {
    showTheseVehicles(elVehicle);
  } else if (evt.target.dataset.filter === "showSeats") {
    showTheseVehicles(vehicleSeats);
  } else if (evt.target.dataset.filter === "showJonas") {
    showTheseVehicles(jonasBiler);
  } else if (evt.target.dataset.filter === "showRye") {
    showTheseVehicles(ryeBread);
  } else {
    showTheseVehicles(vehicles);
  }
}
const vehicles = [
  //OBJEKT MED 4 PROPERTIES
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
const elVehicle = vehicles.filter((vehicle) => vehicle.isElectric);
const vehicleSeats = vehicles.filter((vehicle) => vehicle.passengers > 2);
const jonasBiler = vehicles.filter((vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas");
const ryeBread = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel ? each.fuel : "-"}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops ? each.stops : "-"}</td>
  <td>${each.ownedBy ? each.ownedBy : "-"}</td>
  <td>${each.isElectric ? "Electric" : "unknown"}</td>
  <td>${each.isTandem ? "Tandem" : "unknown"}</td>
</tr>`;
  });
}
