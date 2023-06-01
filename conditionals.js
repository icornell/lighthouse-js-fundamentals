//if statements//
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
//one thing or another//
const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
//temperature done better//
const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
//logical operators//
//&& - logical AND//
//|| - logical OR//
//! - logical NOT//
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
//second example//
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
//third example//
if (!raining) {
  console.log("Leave your umbrella at home!");
}
//We read the expression in the above example usually as "if not raining", but it's not always intuitive what "not true" or "not false" mean unless you remember that the ! operator reverses the value of raining. That is, if raining is true, !raining is false. If raining is false, !raining is true.//