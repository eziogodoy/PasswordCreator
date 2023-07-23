// List of characters 
var lowercase ="abcdefghijklmnopqrstuvwxyz"
var upper = lowercase.toUpperCase()
var number ="123456789"
var special ="!@#$%^&*()"
// password creation 
function generatePassword () {
  console.log("Hello from generate password")
  var userChoice = window.prompt("Choose a number between 8 and 128");
  userChoice = parseInt(userChoice) 
  var choices =""
// Ask the user about which character would like 
console.log("UserChoice",userChoice)
var confirmUpper = window.confirm("Did you want upper case character");
console.log("Upper",confirmUpper)
var confirmLower = window.confirm("Did you want lower case character");
console.log("Lower",confirmLower)
var confirmNumber = window.confirm("Did you want number character");
console.log("Number",confirmNumber)
var confirmSpecialC = window.confirm("Did you want special character");
console.log("SpecialC",confirmSpecialC)

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
