/*const packingList = ["tent", "bug spray", "sleeping bag"];
console.log(packingList[0]);
console.log(packingList[1]);
console.log(packingList[2]);
*/

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
packingList[3];

//for loops - start at 0 not 1, as does indexing of arrays and a good option to iterate over items in an array. 

//updated code to use a while loop:

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}
//note this works the same, but spaces out the logic 