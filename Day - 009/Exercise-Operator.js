// # Exercise - 1 (What will be the result and explain why?)

const x = 10;
const y = "a";
y === "b" || x >= 10

// The result will be True,
/*
    1. Here i tell to chekc that y is equal to "b" same data type at time time. This condition is false,
    2. I tell to check that x is greater than or equal to 10 , here the condition is true.And as we kno OR (pipe) Operator is always loocking for a true.When it's get  a true then return true as value.

*/
console.log(y === "b" || x >= 10);


// # Exercise - 2 (What will be the result and explain why?)-3

const x1 = 3;
const y1 = 8;

console.log(!(x1 == "3" || x1 === y1) && !(y1 != 8 && x1 <= y1));



