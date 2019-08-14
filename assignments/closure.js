// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let school = "Lambda"
let greeting = function(name) {
  return "Hello, " + name + "! Welcome to " + school;
}
console.log(greeting('Aaron'));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function() {
    count++;
    return count;
  }
};
const newCounter = counter();

// Example usage: const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
  }  
};

const nextCounter = counterFactory();

console.log(nextCounter.increment());
console.log(nextCounter.increment());
console.log(nextCounter.increment());
console.log(nextCounter.decrement());