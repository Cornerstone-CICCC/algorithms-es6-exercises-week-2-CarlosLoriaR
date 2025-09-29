/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  let result = "";
  let capitalizeNext = false;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === " ") {
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char;
      }
    }
  }

  return result;
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); // loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious
