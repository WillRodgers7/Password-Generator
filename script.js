var upp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var cha = ["!", "@", "#", "$", "%", "&", "*", "?"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function userInfo() {
	var ask = parseInt(prompt(
		"Please choose a length of at least 8 characters and no more than 128 characters"
	));
	if (ask <= 8) {
		alert("Your password needs to be atleast 8 characters long.");
		return;
	}
	if (ask >= 129) {
		alert("YOur password needs to be less then 129 characters.");
		return;

	}
	var confirmCLetters = confirm("Would you like capitl letters?");
	var confirmLLetters = confirm("Would you like lowercase letters?");
	var confirmNumbers = confirm("Would you like numbers?");
	var confirmCharacters = confirm("Would you like special characters?");




	if (confirmCLetters === false && confirmLLetters === false && confirmNumbers === false && confirmCharacters === false) {
		alert("You must choose atleast 1 type of character to make a password");
		return;

	}
	var userOptions = {
		length: ask,
		confirmCLetters: confirmCLetters,
		confirmLLetters: confirmLLetters,
		confirmNumbers: confirmNumbers,
		confirmCharacters: confirmCharacters,

	}
	return userOptions;
}


function generatePassword() {
	var passwordOptions = userInfo();
	console.log(passwordOptions);
	var userChoices = [];
	var createdPassword = [];


	if (passwordOptions.confirmCLetters === true) {
		userChoices = userChoices.concat(upp);
	}
	if (passwordOptions.confirmLLetters === true) {
		userChoices = userChoices.concat(low);
	}
	if (passwordOptions.confirmNumbers === true) {
		userChoices = userChoices.concat(nums);
	}
	if (passwordOptions.confirmCharacters === true) {
		userChoices = userChoices.concat(cha);
	}


	for (let i = 0; i < passwordOptions.length; i++) {
		//  Generate Random Index of ucerChoices Array
		createdPassword.push(userChoices[Math.floor(Math.random() * userChoices.length)]);
	}
	return createdPassword.join("");
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	console.log(password);
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);