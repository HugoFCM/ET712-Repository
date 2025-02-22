/**
 * Hugo Carcamo
 * Feb 4, Loops
 */
console.log("Hugo Carcamo")
console.log("------ Example 1: for loops ------")
// use a for loop to print from 0 to 4 --> 0 1 2 3 4
for(let n = 0; n<=4 ; n++){
    console.log(` counting = ${n}`)
}

console.log("\n------ Example 2: for loop with conditional (if) statement ------")
// collect the initial value from the user
// print all even number between the initial value & 20
let initialvalue = parseInt(prompt("Enter a number: "))
for(initialvalue; initialvalue<=20; initialvalue++){
    if(initialvalue%2==0){
        console.log(initialvalue) // only print even numbers
    }
}

console.log("\n------ Example 3: for loop as decrement counter ------")
// for loop to print from 9 to 0 in a step of 3 --> 9 6 3 0
for(let n = 9; n>=0 ; n-=3 ){
    console.log(n)
}

console.log("\n------- Example 4: for loop in an array(list) ------")
// set up a list of animals
let animals = ["fish", "turtle", "dog"]
for(let index=0; index<animals.length; index ++){
    console.log(animals[index])
}
// set up a list of numbers
// count how many negative numbers are in the list
let numbers =[5, -3, 10, -9, 2]
let counternegative = 0
for(let index = 0; index<numbers.length ; index++){
    if(numbers[index]<0){
        counternegative++
    }
}
console.log(`There is/are ${counternegative} negative number/s in list 'numbers'`)
console.log("\n------- Example 5: for loop in a string ------")
let username = "Peter Pan"
let counter_e = 0;
for(let index = 0; index<username.length; index++){
    // console.log(username[index])
    // find the total number of letter 'e' in username
    if(username[index]==='e'){
        counter_e++
    }
}
console.log(`There is/are ${counter_e} letter e in 'username' `)
console.log("\n------- Exercise For Loop ------")
let num = [-3, 10, 0, 8, -9, 5, -2, 8, 6, -1]
// use a for loop to check and add all negative numbers and positive number
let sumpos = 0
let sumneg = 0
for(let index = 0; index<num.length ; index++){
    if(num[index]>0){
        sumpos+= num[index]
    }
    else{
        sumneg+= num[index]
    }
}
console.log(`The sum of all the positive numbers in list 'num' is ${sumpos}`)
console.log(`The sum of all the negative numbers in list 'num' is ${sumneg}`)

console.log("\n------- Example 6: While loop as a counter ------")
// use a while loop to display number from 0 to 4
let y = 0;
while(y<=4){
    console.log(y)
    y++
}

console.log("\n------- Example 7: while loop application ------")
// using while loop to check if the user number matches the secret number
const SECRET = 8
// collect a number from the user
let usernumber = parseInt(prompt("Enter a number:"))
let guesscounter = 0;
// run a while to recollect the user number if the number doesn't match the secret number
while(usernumber !== SECRET ){
    guesscounter++
    usernumber = parseInt(prompt("Wrong guess! Enter another number: "))
}
console.log(`${usernumber} is right! Total attempts ${guesscounter}`)

console.log("\n------- Example 8: break in a while loop ------")
// create an app to sum all even numbers. the app continuously collects a posisitve number and stop if a negative number
let sumeven = 0;

while(true){
    let collectnumber = parseInt(prompt("Enter a positive number: "))
    if(collectnumber<0){
        break
    }
    else{
        if (collectnumber%2===0){
            sumeven += collectnumber //sumeven = sumeven + collectnumber
        }
    }
}
console.log(`The sum of all even number is ${sumeven}`)

console.log("\n------- Example 9: continue in a for loop ------")
for(let n =-5; n<=5; n++){
    if(n%2===0){
        continue

    }
    console.log(n)
}
console.log("\n------- EXERCISE B ------")

const PIN = 8937
let enterpin = parseInt(prompt("Enter your pin:"))
let pinguess = 2;

while(enterpin !== PIN){
    pinguess--
    usernumber = parseInt(prompt(`Your PIN is incorrect. ${pinguess} attempts remaining.`))
    if(pinguess===0){
        console.log("Your account is locked!")
        break
    }

}
if(enterpin === PIN){
console.log('Your pin number is correct.')
}
