function generatePassword() {
	var ask = prompt(
		"Please choose a length of at least 8 characters and no more than 128 characters"
	);
	if (person != null) {
		document.getElementById("demo").innerHTML =
			"Hello " + person + "! How are you today?";
	}
	////
	///
	return "this is a test";
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
