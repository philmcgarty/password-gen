// Assignment Code
var generateBtn = document.querySelector("#generate");



//THIS IS THE FUNCTION TO CHANGE
var generatePassword = function() {
  var lCase = "abcdefghijklmnopqrstuvwxyz";
  var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var specials = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~]"+'"';
  var selectedChars = "";
  var passLength = "";

  //Confirm password length
  var passCheck = function() {
    var passLength = window.prompt("How many characters in password? (8-128 only)");
    passLength = parseInt(Math.round(passLength));
    console.log(passLength);
    if (isNaN(passLength) || passLength < 8 || passLength > 128){
      window.alert("That is not a valid number, please try again.");
      passCheck();
    }; 
  };

  passCheck();

  //character confirmation function
  var charConfirmation = function(charType, charTypeVar) {
  var confirm = window.confirm("Should the password contain " + charType + " characters?");
  if (confirm) {
    selectedChars += charTypeVar;
    console.log(selectedChars);
    };
  };

  // While loop to validate at least one character type has been selected
  while (selectedChars === "") {
    // Function calls for cases, numbers etc...
    charConfirmation("lowercase", lCase);
    charConfirmation("uppercase", uCase);
    charConfirmation("numerical", nums);
    charConfirmation("special", specials);
    if (selectedChars === "") {
      window.alert("You must choose at least one character type!");
    };
  }

};
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