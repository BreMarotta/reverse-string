function reverseString(str) {
  let newStr = "";
  for (let i = str.length -1; i >= 0; i --) {
    newStr += str[i];
  }
  return newStr
}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: 'oekin'");
  console.log("=>", reverseString("nikeo"));

  console.log("");

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Pseudocode:
  // create new variable for new string
  //iterate through each character of original string (starting with the last character) and put it in new string in reverse order
  //return new string

// Why it works:
  //This code works by iterating through each letter of the provided string starting from the last letter (represented by i = str.length - 1). Each letter is added to the newStr and then i is increased by 1 so it is doing the second to last letter and so on....until i =0.
