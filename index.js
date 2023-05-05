
//review for each and loop 
const  slides = document.querySelectorAll('.slider-smallBox');
const nextBtn = document.querySelectorAll('.nextButton');
const previousBtn = document.querySelectorAll('.prevButton');
// we define position from index number
//forEach is a loop - go over all pictures
//give name slide  line 9
//index is slide number
slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0

function increaseCounter(){
    counter++;
}
function reduceCounter(){
    counter--;
}
