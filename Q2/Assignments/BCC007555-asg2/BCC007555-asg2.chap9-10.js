
// Qurstion 1
var userCity = prompt("Write you city name:");
if (userCity == 'Karachi') {
  alert('Welcome to city of lights');
}

// Question 2
var userGender = prompt("Write your gender:");
if (userGender == 'male') {
  alert("Good Morning Sir");
}
else if (userGender == 'female') {
  alert("Good Morning Ma'am");
}

// Question 3
var userColorTraffic = prompt("Enter Traffic light color?");
if (userColorTraffic == 'red') {
  alert("Must Stop");
}
else if (userColorTraffic == 'yellow') {
  alert("Ready to Move");
}
else if (userColorTraffic == 'green') {
  alert("Move now.");
}

// Question 4
var userFuelRemain = prompt("Input reamining fuel in liters:");
if (userFuelRemain < 0.25) {
  alert("Please refill the fuel in car.")
}

// Question 5
// a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true"); // True
}
// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true"); // False
}
// c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true"); // True
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true"); // True
}
// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"); // True
}
// e
if (true){
alert("True"); // Alert
}
if (false){
alert("False");
}
// f
if("car" < "cat"){
alert("car is smaller than cat"); // alert
}

// Qurstion 6
var totalObtain = percentage =
subMark1 = subMark2 = subMark3 = 0.00;
var totalMarks = 300;
var grade = remarks = "";

subMark1 = prompt("Enter Subject1 Marks");
subMark2 = prompt("Enter Subject2 Marks");
subMark3 = prompt("Enter Subject3 Marks");

subMark1 = parseInt(subMark1);
subMark2 = parseInt(subMark2);
subMark3 = parseInt(subMark3);

totalObtain = subMark1 + subMark2 + subMark3;
percentage = (totalObtain /totalMarks) * 100;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Execellent";
}
else if (percentage  >= 70) {
  grade = "A";
  remarks = "Good";
}
else if (percentage  >= 60) {
  grade = "B";
  remarks = "You need to improve";
}
else{
  grade = "Fail";
  remarks = "Sorry";
}

document.write(`
  <h2>Marks Sheet</h2>
  <br>
  <p>Total Marks: `+ totalMarks +`</p>
  <p>Marks Obtain: `+ totalObtain +`</p>
  <p>Percentage: `+ percentage +`%</p>
  <p>Grade: `+ grade +`</p>
  <p>Remarks: `+ remarks +`</p>

  `)

// Qurstion 7
var seceretNo = 7;
var userGuessNo = prompt("Guess a number in 1 - 10");
if (userGuessNo == seceretNo) {
  alert("Bingo! Correct answer");
}
else if (userGuessNo == --seceretNo) {
  alert("Close enough to the correct answer");
}
else{
  alert("Try Again");
}

// Question 8
var checkNo3 = prompt("Enter No to check divisible by 3");
if (checkNo3 % 3 == 0) {
  alert("No is divisible by 3");
}
else{
  alert("No is not divisible by 3");
}

// Question 9
var checkEvenOdd = prompt("Check no is even or odd");
if (checkEvenOdd % 2 == 0) {
  alert("No is Even");
}
else if (checkEvenOdd % 3 == 0) {
  alert("No is odd");
}

// Question 10
var tempratureInput = prompt("Enter temprature: ");
if (tempratureInput > 40) {
  alert("Its too hot outside");
}
else if (tempratureInput > 30) {
  alert("The weather is normal");
}
else if (tempratureInput > 20) {
  alert("Tpdasy weather is cool");
}
else if (tempratureInput > 10) {
  alert("OMG todays weather is cold");
}
else{
  alert("Its cold")
}

// Qurstion 11
var firstNo = parseInt(prompt("Enter first No"));
var secondNo = parseInt(prompt("Enter second No"));
var oprator = prompt("Enter operator");
if (oprator == "+") {
  alert(firstNo + secondNo);
}
else if (oprator == "-") {
  alert(firstNo - secondNo);
}
else if (oprator == "*") {
  alert(firstNo * secondNo);
}
else if (oprator == "/") {
  alert(firstNo / secondNo);
}
