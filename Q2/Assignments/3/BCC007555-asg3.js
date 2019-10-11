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
// document.write('<br> Question 5 <br>');
//
// var dubArr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var noDubArr = [...new Set(dubArr)];
// document.write(dubArr + '<br>');
// document.write(noDubArr);

// // Question 6
// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th","st","nd","rd"];
// for (var i = 0; i < 1; i++) {
//   for (var j = 1; j < o.length; j++) {
//     if (o[j] == 'st') {
//       console.log("1" + o[j] + " choice is " + aCities[0]);
//     }
//     else if (o[j] == 'nd') {
//       console.log("2" + o[j] + " choice is " + aCities[1]);
//     }
//     else if (o[j] == 'rd') {
//       console.log("3" + o[j] + " choice is " + aCities[2]);
//     }
//     else if (o[j] == 'th') {
//       console.log("4" + o[j] + " choice is " + aCities[3]);
//     }
//   }
// }

// // Question 7
// document.write('<br> Question 7 <br>');
//
// var a = [10,20,4, 4, 4, 4,40,60,70];
// var b = [1,2,3,4,5,6,7,8,9,10];
// var c = [...new Set(b.concat(a))];

// document.write(a + '<br>');
// document.write(b+ '<br>');
// document.write(c);

// // Question 8
// document.write('<br> Question 8 <br>');
// // a
// for (let i = 1; i < 16; i++) {
//   console.log(i);
// }
// // b
// for (let i = 10; i > 0 ; i--) {
//   console.log(i);
// }
// // c
// for (let i = 1; i < 21; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// // d
// for (let i = 0; i < 20; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }
// // e
// for (let i = 2; i < 21; i++) {
//   if (i % 2 == 0) {
//     console.log(i + "K");
//   }
// }

// // Question 9
// var lar = [222, 24, 53, 78, 91, 12];
// var largest = 0;
// for (var i = 0; i <= largest; i++) {
//   if (lar[i] > largest) {
//      largest = lar[i];
//   }
// }
// console.log(lar);
// console.log(largest);

// // Question 10
// var sorts = [20,53,78,4,91,12];
// var largest = 0;
// var n  = [];
// for (var i = 0; i <= largest; i++) {
//   if (sorts[i] > largest) {
//      largest = sorts[i];
//      n.push(largest);
//   }
// }
// console.log(sorts);
// console.log(largest);
// console.log(n);
