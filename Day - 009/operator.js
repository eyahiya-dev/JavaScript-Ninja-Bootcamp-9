/*
# Falsy value
- false
- 0
- null
- undefined
- NaN
- '' empty string
*/

// Checkign Truthy or Falsy value

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));

console.log(Boolean('eyahiya')  === true );
console.log(Boolean(0) === true);
console.log(!"");
console.log(!"Eyahiya");
console.log(!!"Eyahiya");

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false || false);
console.log(true || false);
console.log(true || true);




