// open the home
let frontSide = document.querySelector(".front");
let houseIcon = document.querySelector(".house > i")
let pointOn = document.querySelector(".house > span")

houseIcon.onclick = (e) => {
    frontSide.classList.toggle("outside");
    if(e.target.classList.contains("fa-door-closed")) {
        e.target.classList.replace("fa-door-closed", "fa-door-open");
    } else {
        e.target.classList.replace("fa-door-open", "fa-door-closed");
    }
}

// hide the hand icon
document.addEventListener("click", () => {
    pointOn.classList.add("vanish");
})

// close the front page after a few seconds
setTimeout(() => {
    frontSide.classList.remove("outside")
},1000)

// open different section
let direction = document.querySelectorAll(".house .rooms > div:not(:first-child)");
let directionOverlay = document.querySelectorAll(".house .rooms > div:not(:first-child) .overlay");
let animateSpan = document.querySelectorAll(".house .rooms > div .overlay > span")
let exit = document.querySelector(".exit")
let arrows = document.querySelectorAll(".rooms > div > .see")


animateSpan.forEach((e) => e.classList.add("vanish"));

// control the different pages(sections)
direction.forEach(e => {
    e.onclick = function () {
        this.style.cssText = "cursor: initial;";
        this.classList.add("outside", "layer");
        houseIcon.classList.add("hide");
        exit.classList.remove("hide");
        animateSpan.forEach((e) => e.classList.remove("vanish"))
        this.querySelector("div > i").classList.remove("hide");
    }
});

// more control the different pages(sections) with exit icon
exit.onclick = (e) => {
    direction.forEach((e) => {
        e.style.cssText = "cursor: pointer;";
        e.classList.remove("outside","layer");
    })
    e.target.classList.add("hide");
    houseIcon.classList.remove("hide");
    directionOverlay.forEach((e) => {
        e.classList.remove("show");
    }); 
    animateSpan.forEach((e) => e.classList.add("vanish"))
    arrows.forEach((e) => e.classList.add("hide"))
}

// show the sections and hide the overlay
arrows.forEach((arr) => {
    arr.onclick = (e) => {
        e.target.parentElement.querySelector(".overlay").classList.toggle("show");
        e.target.parentElement.querySelector(".container").classList.add("go");
    }
});


// show more services(cards) in services page in small screens
let cardServices = document.querySelectorAll(".left .container .card");
let moreIcon = document.querySelector(".more");

window.addEventListener("resize", changeMedia) 

changeMedia();

function changeMedia () {
    let cardNext = document.querySelectorAll(".left .container .card.next");
    if (window.innerWidth < 767) {
            cardNext.forEach((e) => e.classList.add("vanish"));
            moreIcon.classList.remove("vanish")
        }
        else {
            cardServices.forEach((e) => e.classList.remove("vanish"));
            moreIcon.classList.add("vanish")
        }   
}

moreIcon.onclick = () => {
    cardServices.forEach((e) => e.classList.toggle("vanish"));
    cardServices.forEach((e) => e.classList.toggle("next"));
}

// slide the works
let leftArrow = document.querySelector(".top .slide span:first-child")
let rightArrow = document.querySelector(".top .slide span:nth-child(2)")
let boxWorks = document.querySelectorAll(".top .container .box")
let percentPosition = [ 10, 60, 110, 160, 210, 260]
let d = 0;
let n = 0;

rightArrow.onclick = () => {
    leftArrow.classList.remove("no-click");
    d = n + 50
    n = n + 50
    for(i = 0; i < boxWorks.length; i++) {
        boxWorks[i].style.cssText = `right:${percentPosition[i] + n}%`
    }
    if ( n == 50 ) {
        rightArrow.classList.add("no-click");
    }
}
leftArrow.onclick = () => {
    rightArrow.classList.remove("no-click")
    n = d - 50
    d = d - 50
    for(i = 0; i < boxWorks.length; i++) {
        boxWorks[i].style.cssText = `right:${percentPosition[i] + d}%`
    }
    if ( d == -250 ) {
        leftArrow.classList.add("no-click");
    }
}