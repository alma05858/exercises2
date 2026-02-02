import { getRandomNumber } from "../utils/utils_lib";

console.log(getRandomNumber);

function beregnmoms(beloeb) {
  const moms = 0.25;
  const total = beloeb + beloeb * moms;
  console.log(total);
}

beregnmoms(100);
