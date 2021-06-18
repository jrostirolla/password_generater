// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", ".", "+" ]
var numericCharacters = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]
var alphaCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var capitalLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
//var trialOption = "abcdefghijklmnopqrstuvwxyz1234567890~`!@#$%^&*()-_=+.,"

function startPrompt() {
    var pwLength = prompt("How long would you like your password to be?", "Choose a num between 8 - 128");
        console.log(pwLength);
if (pwLength >= 8 && pwLength <= 128) {   
    generatePassword()
  } else {
  alert("ATTENTION: Password length too short. Please pick a number between 8 and 128");
}
}



var passwordArray = [ /*need to figure out how to select chosen arrays in here*/ ]

//TODO: Right the loop
function generatePassword() {
  var lower = document.getElementById("lower").checked
  var upper = document.getElementById("upper").checked
  var number = document.getElementById("number").checked
  var special = document.getElementById("special").checked

  console.log(lower)
  console.log(upper)
  console.log(number)
  console.log(special)

  /*
for (i = 0; i < startPrompt.pwLength; i++) {
  //function getRandom() = getRandom(startPrompt.pwLength) ??
  //insert combined array option here [Number from getRandom sequence here] ??
  
}*/
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword()