const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

// Quand on clique sur Toggle, toggle a class of open on the main tag
// Si ouvert, on change le toggle par close
// Si le menu est ouvert, on change le toggle par ouvert
toggleTag.addEventListener('click', function (e) {
    mainTag.classList.toggle("open")

    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = `<img src="assets/close.svg">Close`
    } else {
        toggleTag.innerHTML = `<img src="assets/menu.svg">Menu`
    }

})