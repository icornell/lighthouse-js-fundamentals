const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

//what the condition looks like at every step
(0 < 10) // repeat is 0
(1 < 10) // repeat is 1
(2 < 10) // repeat is 2
(3 < 10) // repeat is 3
(4 < 10) // repeat is 4
(5 < 10) // repeat is 5
(6 < 10) // repeat is 6
(7 < 10) // repeat is 7
(8 < 10) // repeat is 8
(9 < 10) // repeat is 9
(10 < 10) // repeat is 10//

//changing the code after five repetitions
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");