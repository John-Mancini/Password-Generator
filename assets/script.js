// Assignment Code
var generateBtn = document.querySelector("#generate");

//  Variables
let lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
let uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbercharacter = "0123456789"
let specialcharacter = "!@#$%^&*()_+-=<>?;',./[]{}|`~" /*cant use \ */
let passwordLength;
let uppercaseConfirmed;
let numberConfirmed;
let specialConfirmed;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function used to determine users desired password length 8-128
function determineLength(){
  passwordLength = prompt("Choose between 8-128 characters to determine the desired length of your new password. ");

    if(passwordLength < 8){
      alert("Password must have a value greater then 8 characters.");
    }else if (passwordLength > 128){
      alert("Password must can not have over 128 characters");
    }else if(isNaN(passwordLength)){
      alert("Password must be a number between 8-128");
    }else{
      alert("The next series of prompts choose the different types of characters you'd like your new password to contain.\nIf you choose 'No' for all, your password will only contain lowercase letters.")
    }
    return passwordLength;
}

//Function that determines the use of uppercase characters
function determineUppercase(){
  uppercaseConfirm = prompt("Would you like uppercase letters in your password? \n(Yes or No)");
    uppercaseConfirm = uppercaseConfirm.toLowerCase();

    if (uppercaseConfirm === null || uppercaseConfirm === ""){
      alert("Yes or No");
      determineUppercase();

    }else if (uppercaseConfirm === "yes" || uppercaseConfirm ==="y"){
      uppercaseConfirm = true;
      return uppercaseConfirm;

    }else if (uppercaseConfirm === "no" || uppercaseConfirm ==="n"){
      uppercaseConfirm = false;
      return uppercaseConfirm;
    
    }else {
      alert("Yes or No");
      determineUppercase();
    }
    return uppercaseConfirm;
}