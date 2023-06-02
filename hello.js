const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

//improve the code//
const sayHello  = function (name) {
  console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
//sayHello is one of two main varieties of functions://
//One that produces a side effect, as in it does something.//
//One that produces a result, as in it calculates and returns a value we can use in further code.//
//console.log
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 
//return
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
//returning a value of a function with console.log - same result as first option
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);
