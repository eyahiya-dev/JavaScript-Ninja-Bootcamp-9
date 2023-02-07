// 3.write this function takes in two parameters and returns the difference of the two;
// difference(10,2);
// difference(0,2);

function difference(num, num2) {
  return num - num2;
}
console.log(difference(10, 2));
console.log(difference(0, 2));

/*
// 4. Write a function that takes a value as argument and return the type of value-

myFunction(1) //'number'
myFunction(false) //'boolean'
myFunction({}) // 'object'
myFunction(null) // 'object'
myFunction('string') //'string'
myFunction(['array']) //'object'
*/

function myFunction(str) {
  return typeof str;
}
console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction(null));
console.log(myFunction("string"));
console.log(myFunction(["array"]));

/*

//5.Write Down this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is saturday, 2 is Sunday, 3 is Monday etc.). If the number is less than 1 or greater than 7, the function should return undefined; Hint: you can use array to track down day of the week:)

printDay(4); // "Tuesday"
printDay(7); // "Friday"
printDay(41); // undefined

*/

const weekDay = new Array();
weekDay[1] = "Saturday";
weekDay[2] = "Sunday";
weekDay[3] = "Monday";
weekDay[4] = "Tuesday";
weekDay[5] = "Wednesday";
weekDay[6] = "Thursday";
weekDay[7] = "Friday";

function printDay2(x) {
  return weekDay[x];
}
console.log(printDay2(0));
console.log(printDay2(1));
console.log(printDay2(2));
console.log(printDay2(3));
console.log(printDay2(4));

// another way

function printDay() {
  const arr = [
    "Saterday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  return arr;
}
console.log(printDay()[2]);
console.log(printDay()[3]);
console.log(printDay()[5]);
console.log(printDay()[41]);

// another way

const weekDay2 = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
function printDay3(day) {
  if (day > weekDay2.length + 1 || day < 1) {
    return undefined;
  } else {
    return weekDay2[day - 1];
  }
}
console.log(printDay3(4));
console.log(printDay3(1));
console.log(printDay3(44));

/*

// 6.Write down this function takes in one parameter (an array) and returns the last value in the array
It should return undefined if the array is empty.

N.B: count last element index dynamically :)

lastElement([1,2,3,4]); // 4
lastElement([1,2,3,10]); // 10
lastElement([1,2,3,'hi']); // 'hi'
lastElement([]); // undefined

*/






/*
// 7. write a function that return a object based on passed arguments. Returned object key must be x , y, z in order and value will be passed arguments order- 

createObj(1, 2, 3) //{x: 1, y: 2, z:3}
createObj('a','b', 'c') //{x: 'a', y: 'b', z:'c'}
createObj('ab','bc', 'ca') //{x: 'ab', y: 'bc', z:'ca'}

*/

// facing problem
