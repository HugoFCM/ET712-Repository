console.log("Hugo Carcamo")
/**
 * example 1
 */
// collect the element
let btnpressme = document.querySelector(".btnpressme")

// add a click event to change the button and background color when the button is clicked

btnpressme.addEventListener("click", function(e){
    if(e.target.textContent == "PRESS ME"){
        e.target.textContent = "Button was pressed!"
    }
    else{
        e.target.textContent = "PRESS ME"
    }
    // toggle between class 'btnactive' and 'btnpressme'
    e.target.classlist.toggle("btnactive")
})

/**
 * example 2
 */
// remove the <li> if its clicked
// collect the element
let fruitlist = document.querySelector("#fruitlist")

// click event to remove the <li> when its clicked
fruitlist.addEventListener("click", function(event){
    //check if the clicked element is a 'li'
    if(event.target.tagName.toLowerCase() === 'li'){
        event.target.remove()
    }
    else{
        console.log(event.target)
    }
})

/**
 * example 3: prevent default
 * 
 */
// collect the element
let linkqcc = document.querySelector(".linkqcc")

linkqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert(" QCC Website is on maintainance")

})

/**
 * example 4
 */
// collect element
let modalwindow = document.querySelector(".modalwindow")
let linkreadmore = document.querySelector(".linkreadmore")
let closex = document.querySelector(".closex")

linkreadmore.addEventListener("click", function(){
    modalwindow.style.display = "block"
})
closex.addEventListener("click", function(){
    modalwindow.style.display = "none"
})
let touchCounter = 0

let circle = document.getElementById("circle")
let counterDisplay = document.getElementById("counter")
let resetButton = document.getElementById("resetButton")

circle.addEventListener("click", function() {
    touchCounter++
    counterDisplay.textContent = touchCounter
})

resetButton.addEventListener("click", function() {
    touchCounter = 0
    counterDisplay.textContent = touchCounter
})