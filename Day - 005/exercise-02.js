// Exercise about Complex Data Type,

// 1.What are the complex data type in JavaScript?
/* 
 Ans: The typeof operator is used to identify the data types. The primitive data types are simple and easy to use. In contrast, the non-primitive data types (Array and Object) are relatively more complex than primitive data types, so the array and object data types are called complex data types.
 The primitive data types are simple and easy to use. In contrast, the non-primitive data types (Array and Object) are relatively more complex than primitive data types, so the array and object data types are called complex data types.
 
  we will see the functionality and uses of these two complex data types-
    1) Array
    2) Object

 */

// 2.When and why to use Array vs object (Mention 3 point).

/*
Ans:- 
1) We used array when we want to store some data in a single variable at same time.
Object is usually used for store a big amount of data in a variable.

2) Object declare and output syntex is easy and you can store any kind of data here, like primitivs data or complex data. Othewise array is also have simple syntex but is less effective over object.

3) Objects often have a bigger storage/network overhead . Arrays are faster to iterate (on the server side)

*/

// Create an profile object that has your firstName, lastName, and occupation as keys.
// Access each value from your object and console using both dot notation and bracket notation.
// Add a key for hobby to your existing object. Remove the key and value for occupation.

const profile = {
  firstName: "Md",
  lastName: "Eyahiya",
  occupation: "Student",
};
// Dot notation
console.log(profile.firstName);
console.log(profile.lastName);
console.log(profile.occupation);

// bracket notation
console.log(profile["firstName"]);
console.log(profile["lastName"]);
console.log(profile["occupation"]);

// nested object
const company = {
  name: ["Pran", "RFL", "Cocacola", "Suzuki"],
  variation: {
    origin: ["bangladesh", "France", "Japan"],
    certification: "ISO",
  },
  product: ["Home Accessories", "Food and Bevarase", "Ice-cream"],
};

console.log(company.name[3]);
console.log(company.variation.origin[2]);
console.log(company.variation.certification);
console.log(company.product[2]);
console.log(company.product[2] = "Motor Bike");

// Empty object
const medicine = {};
const cloths = new Object();

console.log((medicine.name = "align"));
console.log((cloths.name = "Shirt"));


// 4.when to use dot notation vs bracket notation to access data from object?

/*
Ans: The dot notation and bracket notation both are used to access the object properties. The dot notation is used mostly as it is easier to read and comprehend and also less verbose. The main difference between dot notation and bracket notation is that the bracket notation allows us to access object properties using variable
*/



// 5.Write down the multiple ways to define an array and object.

const arr1 = ['Name', "age", 'occupation'];
const arr2 = []; //Empty array
const arr3 = new Array();

const obj1 = {
    name: "yahya",
    age: 24,
    email: "eyahiya.dev@gmail.com"
}
const obj2 = {} //empty object
const obj3 = new Object();



// 6.Nested data access from array and object

const userObj = {
    name: 'samim',
    address: {
       city: 'Dhaka',
       university: {
          name: 'Dhaka University'
       }
    }
}
 
console.log(userObj.address.university.name);


const userArr = ['samim', ['Dhaka', ['Dhaka university']]]
console.log(userArr[1][1][0]);