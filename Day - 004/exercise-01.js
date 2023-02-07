const name = "Md Eyahiya";
const email = "eyahiya.dev@gmail.com";
const age = 23;
const isDeveloper = true;
const goingToBeDesigner = null;

console.log(
  `Hey it's me ${name}. I am ${age}.you can contact me by this ${email}.I am a Developer and it's ${isDeveloper}. I am going to be a Designer ${goingToBeDesigner}`
);
console.log(
  "Hey it's me " +
    name +
    ". I am " +
    age +
    ".you can contact me by this " +
    email +
    ".I am a Developer and it's " +
    isDeveloper +
    ". I am going to be a Designer " +
    goingToBeDesigner
);

/*

3.See what happens when you have multiple variables of the same name. Which one takes precedence?
Ans:- var and let is redeclarable vairable type. Const is perpement variable type that is not re-assignable.

*/

var m = "hasan";
console.log(m);
m = "mahmud";
console.log(m);

let a = "Eyahiya";
console.log(a);
a = "Mahmud";
console.log(a);
// Here let and var re-assign the value.

const x = "my name is";
console.log(x);
// x = "What is the name";




/*

4.What is the difference between null and undefined?
Ans:- When a variable declare and value not define that is undefine. when we forgot to assign variable value JS is automatic define itseft as undefined.
ex:- let firstName; but the proper way to write this is - let firstName = "Eyahiya";

null means anything not belongs in the variable.null means empty.
ex: let firstName = null; or let firstName = "";

*/






/*

5.What is NaN in JavaScript? What is the typeof NaN?
Ans:- In JavaScript NaN represents a value which is not a number. NaN is actually a numerical value but it is used to represent anything which cannot be used as a number. Due to the fact that NaN is not a valid number, you cannot perform calculations with it.

*/

console.log(5 + NaN);







// 6.You can declare a variable by typing let thing;. What is the value of thing?
// Ans:-
let z = "Eyahiya";
console.log(z);
z = "Mahmud";
console.log(z);
