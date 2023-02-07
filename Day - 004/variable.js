// Variable is a container of Data or labaling the data.

/* There are three type of reserved word to defined variable

    # var       -  var variableName = "Eyahiya";
    # let       -  let variableName = "Mahmud";
    # const     -  const variableName = "Mahmud";

    note:- Every variable declaration process called a statement.
    ex: var variableName = "Eyahiya"; - It's called a statement

    # var
    # Let - var and let is Re-assignable variable type
    # const - conts is permanent and not editable variable type.


    Variable naming convention
    * must start with lettr.It can be capital case or small case and remind it JS is case sensetive.
    * Do not use any special character
    * only use underscore
    * best practice is camel case 
    * You can use number but start will must be atleast one character
    * Do not use any reserve word,like function, var, const.



*/

// First var a = define as Eyahiya and Secondly var a = Mahmud. Here var a is re-assign.
var a = "Eyahiya";
console.log(a);
var a = "Mahmud";
console.log(a);

// Same as var, late is work as like var but using let is good practice.Variables defined with let can be redeclared.
let l = "Eyahiya";
let k = "Mahmud";
console.log(l + " " + k);
k = "al mahmud";
console.log(l + " " + k);

// // Const is fixed variable type you can't re-assign the const variable.If anyone try to redeclare const it's return error.

const m = "himel";
console.log(m);
// const m = 'mahmud'; //Return error.

console.log(`${a} ${l} ${k} ${m}`);

// Most of the time we use const. more than 95% time we use it.

// we won't use var ever.We can use only let and Const.
