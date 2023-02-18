/*
Exercise-1: Answer the following questions about this code block: (2)

const isLearning = true;
if(isLearning){
    console.log("Keep Learning");
} else {
    console.log("I hope you are learning....");
}

What should the above code console.log?

Ans: it should be written by ternary operator
 */

const isLearning = true;
const result1 = isLearning ? "Keep Learning" : "I hope you are learing";
console.log(result1);

/*
Exercise-2:Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?

Ans: By default JS convert some value like truthy or falsy value of a Variabl. If variable contain any kind of value it return true and JS compiled it default, otherwise a variable contain falsy value ( 0, null , false, unfined ) it defaultly return falsy value.That's why if(isLearning) work its own and fine.

*/

/*
Exercise-3:
Use both if and switch statement (6)
====================================================
age: less then 10  
output: stay home under your mom supervision

age: more and equal then 10 and less then 15 
 output: Try to gain knowledge from outside of home

age: more then and equal to 15 and less than 18
output: prepare to cast vote

age: more or equal then 18 
 output: cast you vote

age: unknown
  output: You are out of range

*/

// solve this using if else Conditional

const yourAge = "unknown";
if (yourAge < 10) {
  console.log("Stay home under your mom supervision");
} else if (yourAge >= 10 && yourAge < 15) {
  console.log("Try to gain knowledge from outside of home");
} else if (yourAge >= 15 && yourAge < 18) {
  console.log("Prepare to cast vote");
} else if (yourAge >= 18) {
  console.log("Cast your vote");
} else {
  console.log(`You're out of range`);
}

// solve this using Switch Case Conditional

let age = 10;

switch (true) {
  case age < 10:
    console.log("Stay home under your mom supervision");
    break;
  case age >= 10 && age < 15:
    console.log("Try to gain knowledge from outside of home");
    break;
  case age >= 15 && age < 18:
    console.log("Prepare to cast vote");
    break;
  case age >= 18:
    console.log("Cast your vote");
    break;
  default:
    console.log(`You're out of range`);
    break;
}

/*

Exercise-4:

let var1;
const var2 = "";
const var3 = 1;
const secretMessage = "secret!";

if(var1){
    console.log("first");
} else if(var1 || var2){
    console.log("second");
} else if(var1 || var3){
    console.log("third");
} else {
    console.log("fourth");
}

What should the above code console.log? Why? (2)
Ans: 

What is the value of var1 when it is initialized? (1)
Ans: The value of var1 is Undefined.Because of just variable were declared and not assign any value with it.

Is the value of var1 a "truthy" value? Why? (1)
Ans: No. the value of var1 is Falsy value, Because variable just declared but doesn't assign any value.So that's why it return falsy value.

Is the value of var2 a "truthy" value? Why? (1)
Ans: It is also a falsy value because of the variable was initilized but assign a empty string and it return falsy value also.

Is the value of var3 a "truthy" value? Why?(1)
Ans: Yes it is a Truthy value because of variable was declared and assign a value. Truthy value means alwasy contain a value.

*/

/*
Exercise-5:
Choose the correct conditional (ternary) operator to console  "Too young" if age is less than 18, otherwise alert "Old enough"

*/

const age1 = 18;
const result2 = age1 < 18 ? "Too young" : "Old enough";
console.log(result2);

/*
Exercise-6:When to Use if else vs ternary vs switch? 

Ans: 

*/
