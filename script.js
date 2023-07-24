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
// If Uppercase is true* todos los Uppercase se tomaran en cuenta para la contrasena 
if(confirmUpper) {choices = choices + upper}
// Si lowercase es true* todos los lowercase se tomaran en cuenta para la contrasena 
if(confirmLower) {choices = choices + lowercase}
// Si number es true* todos los numbers se tomaran en cuenta para la contrasena 
if(confirmNumber) {choices = choices + number}
// Si specialC es true* todos los specialC se tomaran en cuenta para la contrasena 
if (confirmSpecialC) {choices = choices + special}

var results = ""; 
// Based on the user Choices, the console make random choices using the list
for (let step = 0; step < userChoice; step++) {
  var index = Math.floor(Math.random() * choices.length); 
  console.log(index, choices[index])

results += choices[index] 
}

return results

}


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

