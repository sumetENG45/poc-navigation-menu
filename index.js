const str = "What is your name, what would you name your pet?";

console.log("input: ", str);

// remove spacial character
const onlyChar = str.replace(/[^a-zA-Z ]/g, "");

// convert to lower case
const lowerCase = onlyChar.toLowerCase();

// convert to array
const strArr = lowerCase.split(' ');

// count each word in array
const result = strArr.reduce((carry, str) => {
    const oldCount = carry[str] || 0;
    carry[str] = oldCount + 1;
    return carry;
}, {})

console.log("result: ", result);
