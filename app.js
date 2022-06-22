const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',()=>{
        //toggle the nav
        nav.classList.toggle('nav-active')
        
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }        
        })

        burger.classList.toggle('toggle');
    })

    
}

navSlide();

// const smootheScroll = (target,duration) => {
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     function animation(currentTime){
//         console.log(currentTime)
//         if(startTime === null) startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = easeInOutQuad(timeElapsed,startPosition,distance,duration)
//         window.scrollTo(0,run);
//         if(timeElapsed < duration) requestAnimationFrame(animation);
//     }
 
//     function easeInOutQuad(t, b, c, d) {
//         t /= d/2;
//         if (t < 1) return c/2*t*t + b;
//         t--;
//         return -c/2 * (t*(t-2) - 1) + b;
//     };

//     requestAnimationFrame(animation);
// }

// var about_section = document.querySelector('.about_section');
// var projects_section = document.querySelector('.projects_section');
// var skills_section = document.querySelector('.skills_section');

// about_section.addEventListener('click',function(){
//     smootheScroll('#about_section', 1000);
// });


// projects_section.addEventListener('click',function(){
//     smootheScroll('#projects_section', 1000);
// });


// skills_section.addEventListener('click',function(){
//     smootheScroll('#skills_section', 1000);
// });

