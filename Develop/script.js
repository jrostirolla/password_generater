// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
TODO: solution ideas:
- Generate Math.random several times, whichever number they select, to generate a random letter or number however many times they chose
- 




TODO: Create first prompt, length of PW, started when "generate PW button is pressed"

TODO: 
*/