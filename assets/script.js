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
      determineLength();
    }else if (passwordLength > 128){
      alert("Password must can not have over 128 characters");
      determineLength();
    }else if(isNaN(passwordLength)){
      alert("Password must be a number between 8-128");
      determineLength();
    }else{
      alert("The next series of prompts choose the different types of characters you'd like your new password to contain.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
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
//function to determine numbers
function determineUppercase(){
  numberConfirm = prompt("Would you like Numbers in your password? \n(Yes or No)");
    numberConfirm = numberConfirm.toLowerCase();

    if (numberConfirm === null || numberConfirm === ""){
      alert("Yes or No");
      determineUppercase();

    }else if (numberConfirm === "yes" || numberConfirm ==="y"){
      numberConfirm = true;
      return numberConfirm;

    }else if (numberConfirm === "no" || numberConfirm ==="n"){
      numberConfirm = false;
      return numberConfirm;
    
    }else {
      alert("Yes or No");
      determineUppercase();
    }
    return numberConfirm;
}

//function to determine special characters
function determineUppercase(){
  specialConfirm = prompt("Would you like uppercase letters in your password? \n(Yes or No)");
    specialConfirm = specialConfirm.toLowerCase();

    if (specialConfirm === null || specialConfirm === ""){
      alert("Yes or No");
      determineUppercase();

    }else if (specialConfirm === "yes" || specialConfirm ==="y"){
      specialConfirm = true;
      return specialConfirm;

    }else if (specialConfirm === "no" || specialConfirm ==="n"){
      specialConfirm = false;
      return specialConfirm;
    
    }else {
      alert("Yes or No");
      determineUppercase();
    }
    return specialConfirm;
}

//Function that takes all the prompts and generates a password based on the answer using a random number generator, if the answer was no for everything the password will be all lowercase letters.

function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseConfirm);
  determineNumbers();
  console.log(numberConfirm);
  determineSpecial();
  console.log(specialConfirm);

  var characters = lowercaseLetter;
  var password = "";
  if(uppercaseConfirmed && numberConfirmed && specialConfirmed){
    characters += uppercaseLetter + numbercharacter + specialcharacter;

  }else if(uppercaseConfirm && specialConfirmed){
    characters += uppercaseLetter + numbercharacter;

  }else if(numberConfirmed && specialConfirm){
    characters += numbercharacter + specialcharacter;

  }else if(uppercaseConfirmed && specialConfirm){
    characters += uppercaseLetter + specialcharacter;

  }else if(uppercaseConfirm){
    characters += uppercaseConfirm;

  }else if(numberConfirmed){
    characters += numbercharacter;

  }else if(specialConfirm){
    characters += specialcharacter;
  }
  else{
    characters === lowercaseLetter;
  }
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;

}