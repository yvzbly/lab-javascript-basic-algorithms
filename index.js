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
