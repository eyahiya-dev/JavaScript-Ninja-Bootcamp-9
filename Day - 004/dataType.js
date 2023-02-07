/*
There are mainly Two types of data in Javascript

# 1) Primitives Data type (Single Data)
* String [ ex:- "Hello World", 'Bangladesh' ]
note:- Single Quote ('') or Double Quote ("") always define string data type

* Number [ ex:- 12345 ]
note: It can be only perfect number, fload number, negetive number , positve number. all kind of number is Number data
type.

* Booleans [ ex:- True or False ]
* Null [ ex:- Null ]
* undefined [ ex:- undefined ]
* Symbol (Generate unique value)
* Big Integer


# 2) Complex or Object type Data (Collection of Data)




Note: To check data type use this function - [ typeof(); ]

example: console.log(typeof("hello world")); -> String
example: console.log(typeof(1324)); -> Number

*/

// String Data Type
console.log("Hello Bangladesh");
console.log("Hello Bangladesh");

// Check String
console.log(typeof "Hello World");
console.log(typeof "Hello World");

// Concatenation data with "+"
console.log("hello" + " world");

// Escape Character with "\"
console.log("hello i'm Eyahiya");

// Template String for better and Cleaner output
console.log(`Hi, i'm eyahiya `);

// Measure the length of String
console.log("Hi, This is Eyahiya Mahmud".length);
console.log("Hi, This is Eyahiya Mahmud"[12]);

// Number Data Type
console.log(123);
console.log(56.202);

// Doing some math using Number Data Type
console.log(10 + 20);
console.log(40 - 20);
console.log(40 / 5);
console.log(5 * 5);
console.log(5 ** 3);

// Modulus or Remainder  Operator
console.log(10 % 2);
console.log(100 % 7);

// Check Number
console.log(typeof 1234);
console.log(typeof 56.202);

// Boolean Data Type
console.log(true);
console.log(false);

// Check Boolean
console.log(typeof true);
console.log(typeof false);

// Symbol Data Type and Check
console.log(typeof Symbol());
console.log(typeof Symbol("i am Eyahiya"));

// Big integer and Check
console.log(1324n);
console.log(typeof 1234n);

// Null and Undefined
let var1;
console.log(var1);
let v2 = null;
console.log(v2);
let v3 = "";
console.log(v3);
