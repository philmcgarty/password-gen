// Assignment Code
var generateBtn = document.querySelector("#generate");

//THIS IS THE FUNCTION TO CHANGE
var generatePassword = function() {
  var lCase = "abcdefghijklmnopqrstuvwxyz";
  var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var specials = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~]"+'"';
  var selectedChars = "";

  //Confirm password length
  var passLength = window.prompt("How many characters in password? (8-128 only)");
  console.log(passLength);
  
  //Confirm lowercase
  var lCaseConfirm = window.confirm("Should the password contain lowercase letters? e.g. a-z");
  if (lCaseConfirm) {
    selectedChars += lCase;
    console.log(selectedChars); 
  }
  //Confirm
  var uCaseConfirm = window.confirm("Should the password contain uppercase letters? e.g A-Z");
  if (uCaseConfirm) {
    selectedChars += uCase;
    console.log(selectedChars);
  }

}
//DON'T CHANGE ANYTHING BELOW THIS!



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Prompts
//Length (8-128 char) - numeric input required w/ validation
//Lowercase - yes/no
//Uppercase - yes/no
//Numeric - yes/no
//Special Characters yes/no

// Each input needs to be validated
// At least one character type must be selected

//Password generated using criteria
//-----------
//create variables for each prompt
//e.g a-z, A-Z, 0-9, [specials -  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]
//add each string to a master variable that contains all available characters for password
//if loop that randomly selects from available characters to length stated by user
//select a random character each time from the available string using - chatAt(random number from string)

//**If time, create function for character confirmations to reduce code**