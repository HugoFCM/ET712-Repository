/**
 * Hugo Carcmao
 * Homework 2 - functions, loops, and conditional statement
 */
console.log("Hugo Carcamo")
console.log("\n--------- Exercise 1 ---------")
function name_counting(names) {
    let count = 0;

    
    for (let i = 0; i < names.length; i++) {
        if (names[i].length < 5) {
            count++;  
        }
    }

    return count;  
}


let names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"];
console.log(name_counting(names));

function checkNum() {
    let num;

    while (true) {
        num = prompt("Enter a number: ");

        if (num !== null && !isNaN(num) && num.trim() !== "") {
            num = parseInt(num);
            break;
        } else {
            alert("ERROR: Please enter a valid number!!!!!!!!");
        }
    }

    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNum());

