// Assignment Code
var generateBtn = document.querySelector("#generate");


//THIS IS THE FUNCTION TO CHANGE
var generatePassword = function() {
  var lCase = "abcdefghijklmnopqrstuvwxyz";
  var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var specials = " !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~]"+'"';
  var selectedChars = "";
  var passLength = "";
  var generatedPass = "";

  //Confirm password length
  var passCheck = function() {
    passLength = window.prompt("How many characters in password? (8-128 only)");
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
    //If string empty then nothing chosen and user warned
    if (selectedChars === "") {
      window.alert("You must choose at least one character type!");
    };
  }

  //Loop to randomly generate characters
  for (let i=0; i < passLength; i++) {
    random = Math.floor(Math.random()*selectedChars.length);
    generatedPass += (selectedChars.charAt(random));
    console.log(generatedPass);
  };
  return generatedPass;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);