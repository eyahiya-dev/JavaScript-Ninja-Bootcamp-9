// Mutabily  - modify
// object and array are mutable thas mean you can modify.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr[0] = "Y";
arr[1] = "a";
arr[2] = "h";
arr[3] = "y";
arr[4] = "y";
arr[5] = "a";
arr[6] = 1;
arr[7] = 9;
console.log(arr);

const obj = {
  name: "Hasan Mahmud",
  email: "eyahiya@live.com",
};
obj.name = "Yahya Mahmud";
console.log(obj); // here name = "Yahya Mahmud";

// immutabily  - do not modify
// all primitives are immutable

const name = "Yahya Mahmud";
name[0] = "E";
console.log(name);

// Function as a object

function greet() {
  console.log("HI");
}
greet.name = "Yahya";
greet();
console.log(typeof greet);
console.log(greet instanceof Object); // that's mean greet function is also a object

// use constructor function for creating a fucntion as object

const body = "return 'Hello Bangladesh'";
const funcAsObj = new Function('greeing', body);
console.log(funcAsObj());

