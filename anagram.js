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


const stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
        []
      );
  };
  
  console.log(stringPermutations('abcdere'));

  const checkDico = dicoFrancais.includes(stringPermutations)