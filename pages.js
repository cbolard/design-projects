//relevant tags
const nextTag = document.querySelector("footer img.next")
const prevTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("h2")
const backgroundColor = document.querySelector("body")
const circleTag = document.querySelector("section div.circle")


//this is the data for holding the page we on
let pageNumber = 0;


//haev the content for the pages
const pages = [
    {
	copy : `<a href ="#">Plant life<a>`,
	background : "#edc7a9",
	circle : "#3e78ed",
    },
    {
	copy : `<a href ="#">Type Checker<a>`,
	background : "#a1fffe",
	circle : "#e34a47",
    },
    {
	copy : `<a href ="#">Jenna Buchholzz<a>`,
	background : "#d3c7f3",
	circle : "#f7fe00",
    },

    {
	copy :  `<a href ="#">Brux<a>`,
	background : "#faffb8",
	circle : "#b472e6",
    },
    {
	copy :  `<a href ="#">Words of Womxn<a>`,
	background : "#2b2b2b",
	circle : "#19b591",
    },


]

// make a next fuction to increase page Number
const next = function () {
    pageNumber += 1

    if (pageNumber > pages.length - 1) {
	pageNumber = 0
    }
    updateSection()
}

// make a prev fuction to increase page Number
const prev = function () {
    pageNumber -= 1

    if (pageNumber < 0) {
	pageNumber = pages.length - 1
    }
    updateSection()
}

//random slide
const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length)
    updateSection()
}


// Text HTML to say which page Number
const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    backgroundColor.style.backgroundColor =pages[pageNumber].background
    circleTag.style.backgroundColor =pages[pageNumber].circle
}

//onClick next tag
nextTag.addEventListener('click', function (e) {
    next()
})

//onClick prev tag
prevTag.addEventListener('click', function (e) {
    prev()
})
//onClick random tag
randomTag.addEventListener('click', function (e) {
    random()
})

//when a user presses a key, check arrow left or right

//do next or prev correctly
document.addEventListener("keyup", function (e) {
    if(e.key == "ArrowRight"){
	next()
    }
    else if (e.key == "ArrowLeft"){
	prev()
    }
})