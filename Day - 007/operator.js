// practice Operator

// Arithmatic Operator
const value1 = 6;
const value2 = 2;

console.log(value1 + value2);
console.log(value1 - value2);
console.log(value1 * value2);
console.log(value1 / value2);
console.log(value1 % value2);
console.log(value1 ** value2); //also knoow as superscript. All we knew it mulitplication with power.

// Increment

let num1 = 6;
num1 = num1 + 5;
num1 = num1 + 1;
num1 += 4; //This is a shorcut of increment
num1 + 1; //This is a shorcut of increment
num1++; //This is very easy form of 1 inrcrement.
console.log(num1);

// pre increment
let num2 = 2;
++num2;
console.log(num2);

// Post Increment

let num3 = 5;
num3++;
num3 += 5;
console.log(num3);

// Decrement
let value3 = 10;
value3 = value3 - 2;
console.log(value3);
value3 -= 5;
console.log(value3);
value3--;
console.log(value3);

// pre decrement

let var1 = 10;
--var1;
console.log(var1);

// post decrement

let var2 = 10;
var2--;
console.log(var2);
var2 -= 5;
console.log(var2);

let var4 = 20;
console.log(++var4);
console.log(--var4);
console.log(var4 * 2);
console.log(var4 / 2);

// Comparison Operator
/* Comparison operator always return either true or false based on condition.


    Operator    -  Name                         -    Example      -   Result / Return
       >        -  Greater than                 -    x > 10       -  false
       <        -  Less than                    -    x < 10       -  false
       >=       - Greater than or Equal to      -    x >= 10      -  true
       <=       - less than or Equal to         -    x <= 10      -  true
       ==       - Equal to                      -    x  ==  10     - true
       ===      - Strict Equal to               -    x === 10      - false
       !=       - Not Equal to                  -    x != 10       - false

       note: single ( = ) is the assignment operator , remember it. Your return value (result) depents on your conditons, sometime it can be true sometime it can be false when all your input is same but conditon is different.
*/

// Practice

let x = 8;
console.log(x > 10);
console.log(x < 10);
console.log(x >= 10);
console.log(x <= 10);
console.log(x == 10);
console.log(x === 10);
console.log(x != 10);



// Logical Operator

/*
Operator          -          Name               -        Example             -      Result
&&                -          AND                -        x < 10 && x!=5      -       false
||                -          OR (Pipe Operator) -        y > 9 || x === 5    -       true 
!                 -          NOT                -       !(x === y )          -       true


    Logical operator is mainly used for multiple conditions.

*/







