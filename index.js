// Iteration 1: Names and Input
const hacker1 = 'Yavuz Balay';
console.log(`The driver's name ${hacker1}`);
const hacker2 = 'Elise Jonkers';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// Elise was the driver for this iteration

const hacker1Length = hacker1.length
const hacker2Length = hacker2.length

if(hacker2Length > hacker1Length){
  console.log(`The driver has the longest name, it has ${hacker2Length} characters.`)
} else if(hacker1Length > hacker2Length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker1Length} characters.`)
} else if(hacker1Length === hacker2Length){
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}

// Iteration 3: Loops
//3.1
let space = ' ';
const hacker1Capital = hacker1.toUpperCase();
let hackernameWithSpaces = ' ';
// console.log(hacker1Capital);
for (let i = 0; i < hacker1Capital.length; i++) {
  const check = hacker1Capital[i] + space;
  hackernameWithSpaces += check;
}
console.log(hackernameWithSpaces);

//3.2
let hacker2Reversed = ' ';

for (let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  hacker2Reversed += char;
}

console.log(hacker2Reversed);

//3.3
// Elise is the driver for this iteration
const compareValue = hacker1.localeCompare(hacker2)
console.log(compareValue)

if (compareValue === 1){
  console.log("The driver's name goes first.")
} else if (compareValue === -1){
  console.log("Yo, the navigator goes first, definitely.")
} else if (compareValue === 0){
  console.log("What?! You both have the same name?")
}

