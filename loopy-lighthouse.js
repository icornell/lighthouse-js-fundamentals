// prints the numbers from 100 to 200 to the console, with three exceptions:

// If the number is a multiple of 3, print the String "Loopy".
// If the number is a multiple of 4, print the String "Lighthouse".
// If the number is a multiple of both 3 and 4, print the String "LoopyLighthouse"
let loop = 100;

while (loop <= 200) {
  if (loop % 3 === 0 && loop % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (loop % 4 === 0) {
    console.log("Lighthouse");
  } else if (loop % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(loop);
  }
  loop = loop + 1;
}