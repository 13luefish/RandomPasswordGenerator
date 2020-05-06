var lowerCaseCharacter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseCharacter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var possibleCharacterArray = [];
var finalCharacterArray = [];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var characterLength = prompt(
    "How many characters would you like your password to contain?"
  );
  if (characterLength >= 8 && characterLength <= 128) {
    var confirmLower = confirm(
      "Click ok to confirm including lowercase characters."
    );
    if (confirmLower) {
      var confirmUpper = confirm(
        "Click ok to confirm including uppercase characters."
      );
    } else {
      var confirmUpper = confirm(
        "Click ok to confirm including uppercase characters."
      );
    }
    if (confirmUpper) {
      var confirmNum = confirm(
        "Click ok to confirm including numeric characters."
      );
    } else {
      var confirmNum = confirm(
        "Click ok to confirm including numeric characters."
      );
    }
    if (confirmNum) {
      var confirmSpecial = confirm(
        "Click ok to confirm including special characters."
      );
    } else {
      var confirmSpecial = confirm(
        "Click ok to confirm including special characters."
      );
    }
  } else if (characterLength < 8) {
    alert("Password length must be more than 7 characters.");
  } else if (characterLength > 128) {
    alert("Password length must be less than 129 characters.");
  }
  if (confirmLower === true) {
    possibleCharacterArray = possibleCharacterArray.concat(lowerCaseCharacter);
  }
  if (confirmUpper === true) {
    possibleCharacterArray = possibleCharacterArray.concat(upperCaseCharacter);
  }
  if (confirmNum === true) {
    possibleCharacterArray = possibleCharacterArray.concat(numericCharacter);
  }
  if (confirmSpecial === true) {
    possibleCharacterArray = possibleCharacterArray.concat(specialCharacter);
  }
  for (var i = 0; i < characterLength; i++) {
    finalCharacterArray.push(
      possibleCharacterArray[
        Math.floor(Math.random() * possibleCharacterArray.length)
      ]
    );
  }
  return finalCharacterArray.join("");
}