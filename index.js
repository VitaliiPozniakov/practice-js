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

////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// let result = 0;
// function persistence(num) {
//   result += 1;
//   if (num < 10) {
//     return 0;
//   }

//   const array = String(num).split("");

//   let mult = 1;
//   for (const n of array) {
//     mult *= Number(n);
//   }

//   while (mult > 9) {
//     persistence(mult);

//     break;
//   }

//   return result;
// }

// function persistence(num) {
//     let times = 0;

//     num = num.toString();

//     while (num.length > 1) {
//       times += 1;
//       num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }

//     return times;
//  }

// console.log(persistence(999));

// console.log([2, 5].reduce((a, b) => a * b))

////////////////////////////////////////////////////////////////////////////////////////////////////

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number){
//     if (number < 0) {
//         return 0
//     }
//     let result = 0
//     for (let i = 1; i < number; i += 1){
//         // console.log(i)
//         if (i % 3 === 0 || i % 5 === 0 ) {
//             console.log(i)
//             result += i
//         }
//     }
//  return result
// }

// console.log(solution(10))

////////////////////////////////////////////////////////////////////////////////////////////////////

// Complete the solution so that the function will break up camel casing, using a space between words.

// function solution(string) {
//     let upperCaseIndexes = [];
//     let result = "";

//   const strToLowerCase = string.toLowerCase();

//   for (let i = 0; i < string.length; i += 1) {
//     if (strToLowerCase[i] !== string[i]) {
//       upperCaseIndexes.push(i);
//     }

//     const array = string.split("");

//     for (let i = 0; i < upperCaseIndexes.length; i += 1) {
//       array.splice(upperCaseIndexes[i] + i, 0, " ");
//     }
//     result = array.join("");
//   }
//   return result;
// }

// const solution = string => string.replace(/[A-Z]/g, ' $&');

// function solution(string) {
//     string = string.split('').map(el => {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
//   }

// const solution = string => {
//     // console.log([...string])
//     return [...string].map((char) => {
//       return (char === char.toUpperCase()) ? ` ${char}` : char;
//     }).join('');
//   }

// function solution(string) {
//     let res = "";
//     let letters = string.split("");
//     letters.forEach(letter=>{
//       if(letter.toUpperCase() == letter)
//         res+=" "+letter
//       else
//         res+=letter
//     })
//     return res;
// }

// function solution(string) {
//     let res = '';
//     let a = string.toLowerCase();
//     for(let i = 0; i<a.length;i++){
//     if(a[i]!==string[i]){res+= ' ' + string[i]
//     }else res+=a[i];
//     }
//     return res
// }

// console.log(solution("camelCasingTest"));

////////////////////////////////////////////////////////////////////////////////////////////////////

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// function anagrams(word, words) {
//     return words.filter(item =>
//       item.split('').sort().join('') === word.split('').sort().join('')
//     );
//   }

// const anagrams = (word, words) =>
//      words.filter(item =>
//       item.split('').sort().join('') === word.split('').sort().join('')
//     );

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };

//   console.log(domainName('http://google.com'))

////////////////////////////////////////////////////////////////////////////////////////////////////
// Bubblesort is an inefficient sorting algorithm that is simple to understand and therefore often taught in introductory computer science courses as an example how not to sort a list. Nevertheless, it is correct in the sense that it eventually produces a sorted version of the original list when executed to completion.

// At the heart of Bubblesort is what is known as a pass. Let's look at an example at how a pass works.

// Consider the following list:

// 9, 7, 5, 3, 1, 2, 4, 6, 8
// We initiate a pass by comparing the first two elements of the list. Is the first element greater than the second? If so, we swap the two elements. Since 9 is greater than 7 in this case, we swap them to give 7, 9. The list then becomes:

// 7, 9, 5, 3, 1, 2, 4, 6, 8
// We then continue the process for the 2nd and 3rd elements, 3rd and 4th elements ... all the way up to the last two elements. When the pass is complete, our list becomes:

// 7, 5, 3, 1, 2, 4, 6, 8, 9
// Notice that the largest value 9 "bubbled up" to the end of the list. This is precisely how Bubblesort got its name.

// Task
// Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.

// function bubblesortOnce(a) {
//     // const b = [...a]
//     const b = []
// for (let i =0; i < a.length; i +=1){
//     console.log(a[i])

//     if (a[i] > a[i+1]){
// // b.push(a[i])
// // b.unshift(a[i+1])

// b[i] = a[i+1]
// b[i+1] = a[i]
//     }

//     console.log(b)

//     // [...a].sort((a[i], a[i+1]) => {
//     //    return a[i] - a[i+1]
//     // })

//     // [...a].sort((a, b) => a - b);
// }
//   }

// function bubblesortOnce(a) {
//     let result = [...a]
//     for (let i = 0; i < result.length - 1; i++) {
//       if (result[i] > result[i + 1]) {
//         [result[i],result[i + 1]] = [result[i + 1], result[i]]
//       }
//       console.log(result)
//     }
//     return result
//   }

//   function bubblesortOnce(a) {
//     return [...a].map((e, i, arr) => e > arr[i+1] ? (arr[i] = arr[i+1], arr[i+1] = e, arr[i]) : e)

// }

// function bubblesortOnce(a) {
//     return a.reduce((acc, el, i) => {
//       if (acc[i] >= a[i+1]) {
//         acc[i+1] = acc[i];
//         acc[i] = a[i+1]
//       }
//       return acc;
//     }, [...a]);
//   }

// let bubblesortOnce = (a) => {
//     let result = [];
//     let smallest = a[0];
//     if(a.length > 1){
//       for(let i = 1; i < a.length ; i++){
//         if(a[i] < smallest){
//           result.push(a[i]);
//         }
//         else {
//           result.push(smallest);
//           smallest = a[i]
//         }
//       }
//       result.push(smallest);
//       return result;
//     }
//     else{
//       return a;
//     }
//   }

//   console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]))

////////////////////////////////////////////////////////////////////////////////////////////////////

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.



// function moveZeros(arr) {
//     const zeros = arr.filter((elm) => elm === 0)
//     const result = arr.filter((elm) => elm !== 0);
//     return result.concat(zeros)
//     // return [...result, ...zeros];
//   }

// function moveZeros(arr) {
//   const zeroArr = arr.filter((e) => e === 0);

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//     }
//   }
//   return [...arr, ...zeroArr];
// }

// function moveZeros(arr) {
//     return [
//         ...(arr.filter(n => n !== 0)),
//         ...(arr.filter(n => n === 0))
//       ];
//   }

// function moveZeros(arr) {
//     const zeros = arr.filter((elm) => elm === 0).length;
//     const result = arr.filter((elm) => elm !== 0);
    
//     for (let i = 0; i < zeros; i += 1) {
//       result.push(0);
//     }
    
//     return result;
//   }



// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

////////////////////////////////////////////////////////////////////////////////////////////////////


// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// function generateShape(integer){
//     let str = '+'.repeat(integer) + '\n'
//  return str.repeat(integer - 1) + '+'.repeat(integer)
// }

// function generateShape(n){
//     return ("+".repeat(n)+"\n").repeat(n).trim()
//   }

//   function generateShape(int){  
//     let res='';
//     for (let i=0; i<int; ++i)
//     {
//       for (let j=0; j<int; ++j)
//         res+='+';
//         if (i!=int-1){
//             res+='\n';
//         }
     
      
//       }
      
//     return res;
// }

// let generateShape = int => [...Array(int)].map(_ => "+".repeat(int)).join("\n")

// console.log(generateShape(5))

////////////////////////////////////////////////////////////////////////////////////////////////////

// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

// function inAscOrder(arr) {
// for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > arr[i+1]){
//         return false
//     }
// }
// if (arr[0] > arr[arr.length - 1]){
//     return false
// }
// return true
//   }

//   console.log(inAscOrder([9,8,7,6,5,4,3,2,1]))


//   Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

////////////////////////////////////////////////////////////////////////////////////////////////////

// function adjacentElementsProduct(array) {
//     let res = array[0]*array[1]

// for (let i = 0; i < array.length; i += 1) {
//     if (array[i]*array[i+1] > res) {
//         res = array[i]*array[i+1]
//     }
// }
// return res
//   }

  function adjacentElementsProduct(array) {
    let newArr = []
    for(let i=0; i < array.length-1; i+=1){
      newArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
  }

  console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))


