// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  return cb(arr.length);
}
getLength(items, function(length) {
  console.log(length)
});

////////////////////////

function last(arr, cb) {
  return cb(arr[arr.length-1]);
}
last(items, function(fxn) {
  console.log(fxn)
});

///////////////////////

function sumNums(x, y, cb) {
  return cb(x+y);
}
sumNums(2, 3, function(add) {
  console.log(add);
});

//////////////////////

function multiplyNums(x, y, cb) {
 return cb(x*y);
}
multiplyNums(3, 9, function(mult) {
  console.log(mult);
})

////////////////////////

function contains(item, list, cb) {  
  let result = list.filter(element => element === item);
  let inArray = () => {
  if (result.length > 0) {
    return true;
  }  
  else {
    return false;  
  }  
};
cb(inArray());
};

contains ('Pencil', items, function(answer) {
 console.log(answer);
});

contains ('Calculator', items, function(answer) {
  console.log(answer);
});



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

