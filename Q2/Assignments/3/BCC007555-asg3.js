// // Question 1
// document.write('Question 1');
// var education = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
// document.write("<h1> Qualifications: </h1><br>");
// for (let i = 0; i < education.length; i++) {
//      document.write(i+1 + " "+ education[i] +" <br> ");  
// }


// // Question 2
// document.write('<br> Question 2 <br>');
// var students = ['Micheal', 'John', 'Tony'];
// var scores = [320, 230, 480];
// var totalMarks = 500;
// for (let i = 0; i < students.length; i++) {
//     document.write('Score of ' + students[i] + ' is ' + scores[i] + '. Percentage: ' + (scores[i]/totalMarks*100) + "% <br>");    
// }


// // Question 3
// document.write('<br> Question 3 <br>');
// var colors = ['Red', 'Blue', 'Green'];
// document.write(colors);
// // A
// var addBegColor = prompt("what color you want to add to the beginning?");
// colors.unshift(addBegColor);
// document.write(' <br>A:  Add beginning == ' + colors);
// // B
// var addEndColor = prompt("what color you want to add to the beginning?");
// colors.push(addEndColor);
// document.write(' <br>B:  Add end == ' + colors);
// // C
// colors.unshift("White", 'Black');
// document.write(' <br>C:  Add 2 more == ' + colors);
// // D
// colors.shift();
// document.write(' <br>D:  Delete 1st color == ' + colors);
// // E
// colors.pop();
// document.write(' <br>E:  Delete last color == ' + colors);
// // F
// var whichIndexIns = prompt("which index you wants to add a color?");
// var whichColor = prompt("color name?");
// colors.splice(whichIndexIns, 0 , whichColor);
// document.write(' <br>G:  Add to index  == ' + colors);
// // G
// var whichIndex = prompt("which index you wants to delete color?");
// var howMany = prompt("how many colors you wants to delete")
// colors.splice(whichIndex, howMany);
// document.write(' <br>G:  Delete from index  == ' + colors);

// // Question 4
// document.write('<br> <br> Question 4 <br>');
// var cities = ['Lahore', 'Karachi', 'Islamabad', 'Quetta'];
// var selectedCities = cities.slice(1, 4);
// document.write('Cities List: <br>' + cities + '<br> <br> Selected List <br> ' + selectedCities);

// // Question 5
document.write('<br> Question 5 <br>');

var dubArr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var noDubArr = [];


for (let i = 0; i < dubArr.length; i++) {
     
}
document.write(filter(dubArr) + '<br>');
document.write(noDubArr);
