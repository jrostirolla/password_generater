// Assignment Code
var generateBtn = document.querySelector("#generate");

let specialCharacters = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", ".", "+" ]
let numericCharacters = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]
let alphaCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
let capitalLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
let pwLength = null;
let combinedArrayFull = []

function startPrompt() {
  //TODO: Clears array to refresh PW - Work In Progress
    combinedArrayFull.splice(0, combinedArrayFull.length)

    pwLength = parseInt(prompt("How long would you like your password to be?", "Choose a num between 8 - 128"));     
if (pwLength >= 8 && pwLength <= 128) { 
  
  } else {
  alert("ATTENTION: Password length is too short. For better password strength, please pick a number between 8 and 128");
}
}

//TODO: Right the loop
function generatePassword() {
  var lower = document.getElementById("lower").checked
  var upper = document.getElementById("upper").checked
  var number = document.getElementById("number").checked
  var special = document.getElementById("special").checked

  function mergeArray() {
    if (lower === true || upper === true || number === true || special === true) {
      if (lower === true) {
        combinedArrayFull = combinedArrayFull.concat(alphaCharacters);
        console.log("Lowercase letters have now been added to your password")
      } else {
        console.log("lowercase letters not selected")
      };
      if (upper === true) {
        combinedArrayFull = combinedArrayFull.concat(capitalLetters);
        console.log("Uppercase letters have now been added to your password")
      } else {
        console.log("uppercase letters not selected")
      };
      if (number === true) {
        combinedArrayFull = combinedArrayFull.concat(numericCharacters)
        console.log("Numbers have now been added to your password")
      } else {
        console.log("numbers were not selected")
      };
      if (special === true) {
        combinedArrayFull = combinedArrayFull.concat(specialCharacters)
        console.log("Special characters have now been added to your password")
      } else {
        console.log("special characters were not selected")
      }
    } else {
      alert("No characters selected. Please select your desired selectors below");
    }
  }
  mergeArray();
console.log(combinedArrayFull)

 //TODO: change test variables to proper variable
function generateString(length) {
  let output = ' ';
  for ( let i = 0; i < length; i++ ) {
      output = output + combinedArrayFull[Math.floor(Math.random()*combinedArrayFull.length)]
  }

  return output;
}
console.log(generateString(pwLength));
return generateString(pwLength)
}


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
