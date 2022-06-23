//get the element spans
let spans = document.querySelectorAll("span")

//loop the spans
spans.forEach(function (span) { //for every span in the spans do a function
    span.addEventListener("click", function () {
        //we will loop again on every span to remove the class
        spans.forEach(function (e) {
            e.classList.remove("active");
        })
        //set class active on the one span we clicked on
        span.setAttribute("class", "active")
        //loop all spans to delete property
        spans.forEach(function (span) {
            span.style.removeProperty("background-color")
            span.style.removeProperty("color")
        })
        //if span contains class active make bg red
        if (span.classList.contains("active")) {
            span.style.cssText = "background-color:#fc7613;color:white;"
        }
    })
})

//get elements
let submit = document.querySelector(".submit")
let myCard = document.querySelector(".card")
let cardTwo = document.querySelector(".card-two")
let myImg = document.querySelector(".card-two img")


submit.addEventListener("click", function () {
    //rotate first card
    myCard.style.cssText = "transform:rotateY(180deg);"
    //create the p
    let rates = document.createElement("p")
    //on default if the user didnt choose any number
    rates.textContent = `You selected 0 out of 5`
    //function to dynamiclly get the number clicked
    spans.forEach(function (span) {
        if (span.classList.contains("active")){
            rates.textContent = `You selected ${span.textContent} out of 5`
        }
    })
    //add the p in the card
    cardTwo.appendChild(rates)
    //add p after the img
    myImg.after(rates)
})
