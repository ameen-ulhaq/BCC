// Question 1
var numStr = prompt("Check your input type");
alert(numStr.charCodeAt(0));
if (numStr.charCodeAt(0) >= 65 && numStr.charCodeAt(0) <= 90) {
  alert("Uppdercase");
} else if (numStr.charCodeAt(0) >= 97 && numStr.charCodeAt(0) <= 122) {
  alert("Lowercase");
} else if (numStr.charCodeAt(0) >= 48 && numStr.charCodeAt(0) <= 57) {
  alert("Number");
} else if (numStr.charCodeAt(0) >= 43 && numStr.charCodeAt(0) <= 47) {
  alert("Mathematical Operator");
} else {
  alert("Symbols");
}

// Question 2
var firstInt = prompt("Write first integer to check");
var secondInt = prompt("Writr second interger");
if (firstInt > secondInt) {
  alert("First integer " + firstInt + " is greater");
} else if (firstInt < secondInt) {
  alert("second integer " + secondInt + " is greater");
} else {
  alert("Both are equal");
}

// QUESTION: 3
var userInputCheck = prompt("Enter number to check whether the number is positive, negative or zero");
if (userInputCheck > 0) {
  alert("Positive");
} else if (userInputCheck < 0) {
  alert("Negative")
} else {
  alert("Zero")
}

// QUESTION: 4
var cehckVowel = prompt("Enter a Character");
if (cehckVowel == 'a' || cehckVowel == 'e' || cehckVowel == 'i' || cehckVowel == 'o' || cehckVowel == 'u') {
  alert("Vowels");
} else {
  alert("False");
}

// QUESTION: 5
var correctPass = "password";
var userPass = prompt("Enter password");
if (userPass == "") {
  alert("Please enter password");
} else if (userPass == correctPass) {
  alert("Correct! The password youentered matches the original password");
} else {
  alert("Incorrect password")
}

// QUESTION: 6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
alert(greeting);

// QUESTION: 7
var userTime = prompt("Enter time in 24Hr format");
if (userTime >= 0000 && userTime < 1200) {
  alert("Good Morning");
} else if (userTime >= 1200 && userTime < 1700) {
  alert("Good Afternoon");
} else if (userTime >= 1700 && userTime < 2100) {
  alert("Good Evening");
} else if (userTime >= 2100 && userTime < 2359) {
  alert("Good Night");
}
