/*

Homework 1: control flow and loops

Student’s name: Hugo Carcamo

*/

let initialvalue = parseInt(prompt("Enter a number: "));

if(initialvalue === null){
    console.log("Null and void!");
}
else{
    if(initialvalue === ""){
        console.log("Your answer is blank!");
    }
    else{
        if(initialvalue > 0){
            console.log("Think positively!");
        }
        else{
            if(initialvalue < 0){
                console.log("Never have a negative balance!");
            }
            else{
                if(initialvalue == 0){
                    console.log("Yin and Yang!");
                }
            }
        }
    }
}

console.log("-----Exercise 2-----")

let numbers = []; 
let multiple3 = 0, multiple5 = 0, multiple7 = 0;

for (let i = 0; i < 10; i++) {
    let input = prompt("Enter a number:");
    
        numbers.push(parseInt(input)); 
    } 

for (let num of numbers) {
    if (num % 3 === 0) multiple3++;
    if (num % 5 === 0) multiple5++;
    if (num % 7 === 0) multiple7++;
}

console.log(multiple3 + " numbers are multiples of 3");
console.log(multiple5 + " numbers are multiples of 5");
console.log(multiple7 + " numbers are multiples of 7");
