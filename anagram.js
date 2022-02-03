import {dicoFrancais} from "./dictionary.js"

// get letters from user input 
// give a list of permutation from the letters given
// check whether any of the permutations are valid in the dictionary
// return the valid ones with their definition

let input ="abcdere";
//convert string into array
let letters = input.split(", ");

//mix and match all letters together
// make them a string again 

function anagram(){
    for (let i = 0; i < letters.length; i++) {

        let word = letters[i];
        let anaList = word.split("").sort().join("").toLowerCase();
        
      
console.log(anaList);
}};

anagram();

// // looking at permutations
// take the string from the user input
// split it to get each letter separately
// add letters together to form a new string and repeat this operation changing the starting index
// put this new list in an Array
// check this array against the dictionary array and return the matching values 
// => these will be our valid anagrams


const stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce((acc, letter, i) =>
          acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  };
  let output = stringPermutations("abcdere")
  
  console.log(output);

//idea 1:
  const checkDico = dicoFrancais.includes(stringPermutations)
  console.log(checkDico);
//idea 2:
  const found = output.filter(r=> dicoFrancais.indexOf(r)!== -1)
  console.log(found);

//idea 3:
  // array.forEach(element => {
    
  // });

//idea 4:
  function arrayMatch(output, dicoFrancais) {
  var arr = [];  // Array to contain match elements
  for(var i=0 ; i<output.length ; ++i) {
    for(var j=0 ; j<dicoFrancais.length ; ++j) {
      if(output[i] == dicoFrancais[j]) {    // If element is in both the arrays
        arr.push(output[i]);        // Push to arr array
      }
    }
  }
   
  return arr;  // Return the arr elements

}
console.log( arrayMatch(output, dicoFrancais));

// idea 5:
const intersection = output.filter(element => dicoFrancais.includes(element));
console.log(intersection);

