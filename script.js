// List of characters 
var lowercase ="abcdefghijklmnopqrstuvwxyz"
var upper = lowercase.toUpperCase()
var number ="123456789"
var special ="!@#$%^&*()"




// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
