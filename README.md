# Password-Generator
This is a Password Generator to help generate new passwords!
First i added variables for all lowercase letters uppercase letters numbers and special characters that are on a keyboard. 
i added a variable for password length which needed to be 8-128
and then i added my variables for the functions to come that check for upperscase numbers and special characters

then i used the code provided.

My first function is to determine the preferred length of the password with a prompt asking to choose a number 8-128
I used if else if and else to make sure that any number below 8 or above 128 would alter the user that the pasword length would need to be between 8-128 characters
if the person chooses a valid number they will be alerted that the next three prompts would need to be answered. 

the first prompt asks if the user would like uppercase letters in the password
using if else if and else the user can enter the answer YES NO yes no Y N or y n and if decided to chose anything other then those answered would be alters to choose yes or no.

the next 3 prompts would be coded extremely similar and would ask yes or no to determine if the user wanted to include numbers or special characters using corresponding variables. 

the next function generatePassword would take all the following inputs and generate the random password. The else if statements are put in so that the script could give a correct password that would match the criteria the user has established. 
Meaning that if the user choses yes for all the variables then the password would generate with all the variables, if the user said no to a variable the password would generate without the unwanted variable, and if the user says no to all three prompts then a password would be generated with only lowercase characters. 

a for loop is used to randomize the order of the password being generated in respect to the desired length. 

inspiration https://www.youtube.com/watch?v=gYHdSILCYCs&ab_channel=Aphrx
https://github.com/jamierachael/Password-Generator/blob/master/script.js
https://github.com/leolopez10/random-password-generator/blob/master/resources/js/script.js