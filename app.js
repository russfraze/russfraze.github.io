const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li')

let width = document.body.offsetWidth

let navClosed = true // used to toggle the animation

const burgerClick = () => {
    if (width <= 768) {
        navClosed = !navClosed 
        navClosed ? timeline.reverse() : timeline.play();
    } else {
        navClosed = true
        // navClosed = !navClosed
    }
    
}

burger.addEventListener('click', burgerClick)
nav.addEventListener('click', burgerClick)

const timeline = gsap.timeline(
    { defaults: { duration: 1}
})
timeline
.to('.nav-links', {
    x: 0, ease: 'power',  
})
.to('.nav-links li', {
    opacity: 1,
}, '<.5').pause() // animation is paused by default


window.addEventListener('resize', () => {
    width = document.body.offsetWidth
    console.log(width)
    if (width >= 769) {
        location.reload()
    }
})

