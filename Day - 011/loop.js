// while loop

let a = 0;
while (a < 7) {
  console.log(`allah ${a++}`);
}

let b = 0;
while (b <= 10) {
  console.log(`Hello world ${b++}`);
}

// practice with condition and loop

let count = 0;
while (count <= 10) {
  const singularNumber = count + 1;
  console.log(
    `I Love my parents ${singularNumber} ${
      singularNumber < 2 ? "time" : "times"
    }`
  );
  count++;
}

/*
 Infinite Loop
 let i = 0;
 while (i < 10) {
  console.log(i);
  --i
 }
 */

//  Do While loop

let d = 0;
do {
  console.log(d);
  d++;
} while (d < 10);

// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// reverse  loop
for (let m = 20; m >= 0; m--) {
  console.log(m);
}

let n = 10;
while (n > 0) {
  console.log(n);
  --n;
}

let o = 10;
do {
  console.log(o);
  --o;
} while (o >= 0);

// break and continue
for (let b1 = 1; b1 < 15; b1++) {
  console.log(b1);
  if (b1 === 5) {
    break;
  }
  console.log(b1);
}

let b2 = 1;
while (b2 < 20) {
  console.log(b2);
  b2++;
  if (b2 === 10) {
    break;
  }
  console.log(b2);
}

for (let c = 0; c < 10; c++) {
  console.log(c);
  if (c === 2 || c === 4 || c === 6) {
    continue;
  }
  console.log(c);
}

// Nested Loop
for (q = 0; q < 3; q++) {
  console.log(q);
  for (r = 0; r < 3; r++) {
    console.log(r);
    console.log(q, r);
  }
}

// iterating String

const str = "Yahya";
for (i = 0; i < str.length; i++) {
  console.log(i);
  console.log(str[i]);
}

const str1 = "Yahya Mahmud";
z = 0;
while (z < str1.length) {
  console.log(str1[z]);
  z++;
}

// looping array and object

const p1 = ["yahya", 24, "web developer"];

for (let j = 0; j < p1.length; j++) {
  console.log(p1[j]);
}

// for in loop for object
const profile1 = {
  name: "yahya",
  emal: "eyahiya.dev@gmail.com",
  profession: "student and part time developer",
};

for (let property in profile1){
  console.log(profile1[property]);
}
