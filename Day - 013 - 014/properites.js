// Research JS properties and methods

const str = "Hello Bangladesh";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("B"));
console.log(str.lastIndexOf("l")); //last index means the last (l) character in the sentence
console.log(str.trim());
console.log(str.trim().length);
console.log(str.includes("hello")); //It means js is case sensetive
console.log(str.includes("Hello")); //It means js is case sensetive
console.log(str.startsWith("hello"));
console.log(str.startsWith("Hello"));
console.log(str.endsWith("bangladesh"));
console.log(str.endsWith("Bangladesh"));

//slice and substrings
// slice not modify the value of string or array it return a new value,
console.log(str.slice(0, 5));
console.log(str.slice(6, 12));
console.log(str.slice(12));
console.log(str.slice(-4));

console.log(str.substring(6, 2));
console.log(str.substring(2, 9));
console.log(str.substring(0, 5));
console.log(str.substring(12, 6));

// methods
console.log(str.split(" "));
console.log(str.concat(" i ", "am ", "Yahya"));
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(6));
console.log(str.charCodeAt(1)); // charCodeAt return the ASCII code of the element of string.
console.log(str.search("e"));
console.log(str.search("B"));
console.log(str.search("l"));
console.log(str.search("d"));
console.log(str.replace("Hello", "Hi"));
console.log(str.padStart(30, "*"));
console.log(str.padEnd(30, "*"));

// convert string into number
console.log(typeof 10);
console.log(typeof "10");
console.log(typeof Number("10")); //Here Number() function turn string into number.
console.log(parseInt("101000101001010", 2));
console.log(parseInt("101000101001010", 10));
console.log(parseInt("101000101001010", 8));
console.log(parseInt("101000101001010", 16));
console.log(parseFloat("564.2541kgjs"));

// JS max and min number value
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//  NaN is always return false
console.log(isNaN(10));
console.log(isNaN(10.1));
console.log(isNaN("hello"));
console.log(isNaN(true));
console.log(isNaN(false));

// Number.isNaN is return true when value is NaN
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(10));
console.log(Number.isNaN(null));
console.log(Number.isNaN(NaN));

const numNaN = "525d";
console.log(isNaN(numNaN));
console.log(Number(numNaN) !== Number(numNaN));
console.log(Number.isNaN(numNaN));

// ARRAY

// Arrray realated build in function in JS practice
const arr = [10, 20, 30];
console.log(arr.length);
console.log(arr[0]);

// adding data at the end of the array.
arr.push(40, 50, 60);
console.log(arr);

// remove element at the end of the array.
arr.pop();
console.log(arr);

// adding an element at the start of the array.
arr.unshift(5);
console.log(arr);

// removing an element at the start of the array.
arr.shift();
console.log(arr);

// last element of an array
const arrLen = arr.length - 1;
console.log(arr[arrLen]);

// Slice and Splice
console.log(arr.slice(0, 3));

const arr2 = [10, 20, 30, 40, 50, 60, 70];
console.log(arr2.splice(0, 6, "Hello", "bangladesh"));
console.log(arr2);

// adding value using splice
arr2.splice(0, 0, "World");
console.log(arr2);

// Array Methods

// concat
const cont = [10, 20, 30, 40];
console.log(cont.concat(50, 60, 70));

// join
const jon = [10, 20, 30, 40, 50];
console.log(jon.join("."));
console.log(jon.join("/"));
console.log(jon.join("-"));
console.log(jon.join(","));

// indexOf
const index = [1, 2, 3, 4, 5, 6, 7];
console.log(index.indexOf(7));

// lastIndexOf
const lastIndx = [4, 6, 5, 3, 2, 9, 5];
console.log(lastIndx.lastIndexOf(9));

// fill
console.log(new Array(50).fill("Yahya"));

// check array and reverse array
const checkArray = ["yahya", 24, "web developer"];
console.log(Array.isArray(checkArray));
const checkArray2 = {
  name: "yahya",
  age: 24,
  profession: "developer",
};
console.log(Array.isArray(checkArray2));
console.log(checkArray.reverse());
