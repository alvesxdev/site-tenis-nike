let slide = document.querySelectorAll('.slide-container')
let index = 0

const leftButton = document.getElementById('prev');
const rigthButton = document.getElementById('next');

function next(){
    slide[index].classList.remove('active')
    index = (index + 1) % slide.length
    slide[index].classList.add('active')
}

leftButton.addEventListener("click", () => {
    next()
})

function prev(){
    slide[index].classList.remove('active')
    index = (index - 1 + slide.length) % slide.length
    slide[index].classList.add('active')
}

rigthButton.addEventListener("click", () => {
    prev()
})


setInterval (next, 8000)


//SCROLL ANIMAÇÃO//

const sr = ScrollReveal({
    distance: '60px',
    duration: 1900,
    reset: true,
});


 sr.reveal(`.content-home`, {
     origin: 'left',
     interval: 200,
})


sr.reveal(`.content-card`, {
    origin: 'right'
})

sr.reveal(`.container-text`, {
    origin: 'left'
})

sr.reveal(`.container-img`, {
    origin: 'right'
})

sr.reveal(`.content-contato`, {
    origin: 'bottom'
})

