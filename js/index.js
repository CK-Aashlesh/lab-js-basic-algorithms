// Iteration 1: Names and Input

let hacker1 = "Aashlesh";
console.log("The driver's name is " + hacker1);
let hacker2 = "Rahul";
console.log("The navigator's name is " + hacker2);




// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length ) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if ( hacker2.length > hacker1.length ) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  



// Iteration 3: Loops
let spacedName = hacker1.toUpperCase().split('').join(' ');
console.log(spacedName);

let reversName = hacker2.split('').reverse().join('');
console.log(reversName); 

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}