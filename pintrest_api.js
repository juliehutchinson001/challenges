// const mergeTwoBoards = (brd1, brd2) => {

//   let result = [];
//   if (brd1.length === brd2.length) {
//     brd1.forEach((item, ind) => {
//       result.push(item);
//       result.push(brd2[ind]);
//     })

//   } else {
//     let bigArr = brd1.length > brd2.length ? brd1 : brd2;

//     for (let i = 0; i < bigArr.length; i++) {

//       if (i < brd1.length) {
//         result.push(brd1[i]);
//       }

//       if (i < brd2.length) {
//         result.push(brd2[i]);
//       }
//     }

//   }
//   return result;
// }



// 3) Write a function that looks at a string and scrambles the letters between the first and last. This function should take in a String as a parameter, and return a String. The first letter and the last letter of the param String should stay, the letters between the first and last will be shuffled/randomized/scrambled. 

// 2) Write a function that takes a string splits the words into an array of strings and scrambles each word using the function above. Then scramble the quote.

var words = "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."

// var wordsArray = words.split(" ");

function randomizeWord(word) {
  if (word.length < 3) { return word }
  
  var maxInd = word.length - 1;

  function _getRndInd(arrLength) {
      return Math.floor(Math.random() * arrLength);
      // return word[ind];
  }

  var indxs = [];
  for (let i = 1; i < word.length - 1; i++) { indxs.push(i) }
  
  var randInd = _getRndInd(indxs.length);
  

//   var pickedIndxs = [];
//   var randInd = _getRndInd(1, maxInd);
  var result = word[0];
  
//   var notInArr = !pickedIndxs.includes(randInd);
  var resultNotFinished = result.length !== word.length - 1;

  while (resultNotFinished) {
    
//     if (notInArr) {
      result += word[indxs[randInd]];
      indxs.splice(randInd, 1);
//       pickedIndxs.push(randInd);
    
//     }
      
    randInd = _getRndInd(indxs.length);
//     notInArr = !pickedIndxs.includes(randInd);
    resultNotFinished = result.length !== word.length - 1;
  }
  
  return result + word[maxInd];
  
}

// console.log(randomizeWord('helloWorld'));

function randomizeSentence(sentence) {
  var sentenceArr = sentence.split(' ');
  
  var result = '';
  for (let word of sentenceArr) {
    result += randomizeWord(word) + ' ';
  }
  
  return result.trim();
  
}

console.log(randomizeSentence(words));











