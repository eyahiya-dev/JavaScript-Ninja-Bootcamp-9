// # Exercise-1(what will be the output and explain)
let num = 1;

while (num <= 10) {
  console.log(num);
  num += 2;
}
// output of this code is 1,3,5,7,9

// # Exercise-2(what will be the output and explain)

let num1 = 1;

while (num1 <= 20) {
  if (num1 % 4 === 0) {
    console.log(num1);
  }
  num1++;
}
// Output of this code is 4,8,12,16,20

// # Exercise-3(what will be the output and why?)-2

// let num2 = 100;
// while (num2 < 150) {
//   console.log(num2 + 1);
//   num2--;
// }

// It return the infinity loop because of condition is always true that's why the loop is running ever

/*

# Exercise-4(what will be the output? it May require if condition inside loop)-

Print out all even numbers between 1 and 100. Write two solutions: one with a while loop and one with a for loop.

*/

for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let evenNumber = 1;
while (evenNumber <= 100) {
  if (evenNumber % 2 === 0) {
    console.log(evenNumber);
  }
  evenNumber++;
}

/*

# Exercise-5(Run loop and add $ in each repetition)-4

function repeat(num){
//code
}

repeat(3)

<!--
$
$$
$$$ -->

repeat(5)

<!--
$
$$
$$$
$$$$
$$$$$ -->


*/

for (i = 1; i <= 3; i++) {
  console.log(`*`.repeat(i));
}

for (j = 1; j <= 5; j++) {
  console.log(`*`.repeat(j));
}

/*

# Exercise-6(what will be the output and Let's explain) -3

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz(num){
//code
}

fizzBuzz(100)

<!--
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
... -->


*/

for (let k = 1; k <= 100; k++) {
  if (k % 3 === 0) {
    console.log(`Fizz` + " ");
  } else if (k % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(k);
  }
}

/*

Exercise-7:Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b 
function myFunction(a, b) {
return
}
myFunction('m', 'how many times does the character occur in this sentence?') //2
myFunction('h', 'how many times does the character occur in this sentence?') //4
myFunction('?', 'how many times does the character occur in this sentence?') //1
myFunction('z', 'how many times does the character occur in this sentence?') //0

*/

function myFunction(a, b) {
  z = 0;
  for (let i = 0; i < b.length; i++) {
    if (a === b[i]) {
      z += 1;
    }
  }
  return z;
}
console.log(myFunction("m", "mother"));
console.log(myFunction("m", 'how many times does the character occur in this sentence?'));
console.log(myFunction('h', 'how many times does the character occur in this sentence?'));
console.log(myFunction('?', 'how many times does the character occur in this sentence?'));
console.log(myFunction('z', 'how many times does the character occur in this sentence?'));
