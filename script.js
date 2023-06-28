// Assignment code here

//prompts user to 
function generatePassword() {
  var passwordLength = getPasswordLength ();
  var passwordCharacters = getPasswordCharacters();
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[randomIndex]; 
  }
  
  return password;
}

// prompt user to chose password length
function getPasswordLength() {
  var length = 0;
  while (length < 8 || length > 128) {
    length = parseInt(prompt("Enter the desired length of your password (between 8 and 128 characters):"));
    if (isNaN(length)) {
      alert("Invalid input. Please enter a valid number.");
    } else if (length < 8 || length > 128) {
      alert("Password length must be between 8 and 128 characters.");
    }
  }
  return length;
}

// prompt to select password types
function getPasswordCharacters() {
  var lowercase = confirm("Do you want to include lowercase characters?");
  var uppercase = confirm("Do you want to include uppercase characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var special = confirm("Do you want to include special characters?");

  var passwordCharacters = "";

  if (lowercase) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric) {
    passwordCharacters += "0123456789";
  }

  if (special) {
    passwordCharacters += "!@#$%^&*()_-+=~`[]{}|\\:;\"'<>,.?/";
  }

  // makes sure user picked at least one 
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type.");
    return getPasswordCharacters(); // Ask again for password characters
  }

  return passwordCharacters;
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
