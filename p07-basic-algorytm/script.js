// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  let newString = '';
  if (num > 0) {
    for (let j = 0; j < num; j++) {
      newString += str;
      console.log(newString);
    }

    return newString;
  } else return '';
}

repeatStringNumTimes('abc', 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (num < str.length) {
    return `${str.slice(0, num)}...`;
  } else return str;
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  for (let item of arr) {
    if (func(item)) {
      return item;
    }
  }
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
  return typeof bool === 'boolean' ? true : false;
}

booWho(null);
