// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//   for (let i = 0; i < a.length; i += 1) {
//     if (a.includes(b[i])) {
//       a.splice(a.indexOf(b[i]), 1);
//     }
//     if (a.includes(b[i])) {
//       arrayDiff(a, b);
//     }
//   }
//   return a;
// }

// // const array_diff = (a, b) => a.filter(x => b.indexOf(x) === -1 );

// // function array_diff(a, b) {
// //   return a.filter(e => !b.includes(e));
// // }

// console.log(arrayDiff([15,-19,-2],[15,-19,-2]));

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num){
//   return Number( String(num).split('').map(e => e ** 2 ).join(''))
// }

// console.log(squareDigits(9119))

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// function duplicateEncode(word) {
//   const wordtoLowerCase = word.toLowerCase();
//   let result = "";
//   for (let i = 0; i < wordtoLowerCase.length; i += 1) {
//     if (
//       wordtoLowerCase.lastIndexOf(wordtoLowerCase[i]) ===
//       wordtoLowerCase.indexOf(wordtoLowerCase[i])
//     ) {
//       result += "(";
//     } else result += ")";
//   }
//   return result;
// }

// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
//     })
//     .join("");
// }

// console.log(duplicateEncode("(( @")) 

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// function isValidWalk(walk) {
//   const north = walk.filter((item) => item === "n").length;
//   const south = walk.filter((item) => item === "s").length;
//   const east = walk.filter((item) => item === "e").length;
//   const west = walk.filter((item) => item === "w").length;

//   return walk.length === 10 && north === south && east === west;
// }

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));




// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// function getMiddle(s)
// {
//   const array = s.split('') 
// if (array.length % 2 === 0){
// return array.splice(array.indexOf(array[array.length/2 - 1]) , 2).join('')
// }
// else {
//   return array.splice(array.indexOf(array[Math.floor(array.length/2)]) , 1).join('')
// }
// }

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// function getMiddle(s){
   
//   let evenOdd = s.length % 2 === 0
//   // console.log(evenOdd)
//   let minMid = s.charAt(s.length/2-1)
//   // console.log(minMid)
//   let mid = s.charAt(s.length/2)
//   // console.log(mid)
  
//   return (evenOdd == true)? minMid.concat(mid): mid
// }

// console.log(getMiddle("testing"))