//Pick all img and layer them based on z index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

//keep track of 2 things : 
let currentSlide = 0;
let z = 1;

//when I click the slide area, change the slide based on z index
slideArea.addEventListener('click', function (e) {
    currentSlide = currentSlide + 1

    if (currentSlide > images.length - 1) {
        currentSlide = 1
    }

    z = z + 1

    //remove animation from style for every image
    images.forEach(function (image){
        image.style.animation = ""
    })

    //pick right image 
    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = "fade 0.5s"
})



//When mouseover, images go in random places
slideArea.addEventListener("mouseover", function(){
    images.forEach(function(image){
        const x = 25 * (Math.floor(Math.random() * 5)) - 50
        const y = 25 * (Math.floor(Math.random() * 5)) - 50


        image.style.transform = `translate(${x}px, ${y}px)`
    })
})



//When mouse away, images get back
slideArea.addEventListener("mouseout", function(){
    images.forEach(function(image){
        image.style.transform = ""
    })
})