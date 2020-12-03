'use strict';


let slideBox = document.querySelector('.slide-animation');
let slideArray = slideBox.children;

const slide = setInterval(slideshow, 4000)

function slideshow() {
    let firstItem = slideBox.firstElementChild;
    firstItem.classList.remove('active');
    slideBox.appendChild(firstItem);
    slideArray[0].classList.add('active');
}

let check = document.getElementById('check');
let nav = document.getElementById('mobile-nav');

document.getElementById("check").addEventListener('click', () => {
    document.getElementById("mobile-nav").classList.toggle('slide-nav');
});

// check.addEventListener('click', function() {
//     if (nav.classList.contains('slide-nav') === true) {
//         console.log(true);
//         nav.classList.remove('slide-nav');
//     } else {
//         console.log(false);
//         nav.classList.add('slide-nav');
//     }
// });