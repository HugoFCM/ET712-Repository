console.log("Hugo Carcamo")
// example 1
// collect the element
let btnscrollby = document.querySelector(".btnscrollby")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(100,0)
})
/**
 * example 22222222222222222222222222
 */
// COLLECT THE ELEMENTS

let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")

// function to scroll the gallery container
function scrollgallery(pexels){
    let gallerycontainer = document.querySelector(".gallerycontainer")
    gallerycontainer.scrollBy({
        left:pexels,
        behavior: "smooth"
    })
}

// add a click event to each buttons
btnright.addEventListener("click", function(){
    scrollgallery(-600)
})

/**
 * example 3
 */

let topcontainer = document.querySelector(".topcontainer")

window.addEventListener("scroll", function(){
    let pxTop = this.window.scrollY
    console.log(pxTop)
    if(pxTop>100){
        topcontainer.computedStyleMap.display = "none"
    }
})