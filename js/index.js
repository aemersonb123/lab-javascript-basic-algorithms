// Iteration 1: Names and Input
//
let name1 = "Aiden";
let name2 = "Jack";
let spacedName = "";
let reversedName = "";
let hacker1;
hacker1 = "The driver's name is " + name1;
let hacker2;
hacker2 = "The navigator's name is " + name2;
console.log(hacker1);
console.log(hacker2);


//let hacker1;
//hacker1 = 25;
//let hacker2;
//hacker2 = 28;



// Iteration 2: Conditionals
if (name1.length >= name2.length) {
    console.log(`The driver has the longest name, it has ${name1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${name2.length} characters.`);
}


// Iteration 3: Loops

//for (spacedName == name1[0]) {
    //console.log(spacedName);
//}

for (let i = 0; i < name1.length; i++) {

   if (i === name1.length - 1) {
    spacedName += name1[i].toUpperCase()
   } else {
    spacedName += name1[i].toUpperCase() + " "
   }
} 
console.log(spacedName);
console.log(spacedName.length);

for (let i = name2.length - 1; i >= 0; i--) {

    // if (i === name2.length - 1) {
    reversedName += name2[i]
    // }
}
console.log(reversedName);

if (spacedName.length >= reversedName.length) {
    console.log(`The driver's name goes first.`);
} else {
   console.log(`Yo, the navigator goes first definitely.`);
}