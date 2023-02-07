// Arrry is a Complex Data type. It's also called Refrence Data type.

// Declaring array
// Array is alway roundup by Third Bracket [],

const profile = ['Eyahiya', 'Mahmud', 24, 'Web Developer'];

console.log(profile);
console.log(profile[0]);
console.log(profile[1]);
console.log(profile[2]);
console.log(profile[3]);

// Updating date in array
profile[0] = 'Yahya';
profile[1] = 'Himle';
profile[2] = 22;
profile[3] = 'Designer';

console.log(profile[0]);
console.log(profile[1]);
console.log(profile[2]);
console.log(profile[3]);

// Calculate the length of Array

const arr1 = ['Md', 'eyaiya', 'mahmud', 24, 'web developer', 'student'];
console.log(arr1.length);
lastElm = arr1.length - 1;
console.log(arr1[lastElm]);


// Some alternate way for declare arry

const arr2 = [];
arr2[0] = 'mahmud';
arr2[1] = 'mahmud';
arr2[2] = 'mahmud';

console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);

const arr3 = Array();
console.log(arr3);
arr3[0] = 120
console.log(arr3[0]);

const arr4 = Array('hello', 'bangladesh');
console.log(arr4[0]);
console.log(arr4[1]);


