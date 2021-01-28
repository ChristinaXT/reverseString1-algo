//to make a string into an array use .split
 //then to convert array to a string use .join

const reverseString = (string) => {
  // let strArr = str.split("");
  // let reverseStrArray = strArr.reverse();
  // let reversedString = reverseStrArray.join("");
  // return reversedString

  return string.split("").reverse().join("");
}

console.log(reverseString("hello")); //olleh




// const reverseString = (string) => {
//   // let strArr = str.split("");
//   // let reverseStrArray = strArr.reverse();
//   // let reversedString = reverseStrArray.join("");
//   // return reversedString
//
//   return string.split("").reverse().join("");
//
// }
//
// console.log(reverseString("hello")); //olleh
