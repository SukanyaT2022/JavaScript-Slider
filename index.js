
//review for each and loop 
// const  slides = document.querySelectorAll('.slider-smallBox');
// const nextBtn = document.querySelectorAll('.nextButton');
// const previousBtn = document.querySelectorAll('.prevButton');
// we define position from index number
//forEach is a loop - go over all pictures
//give name slide  line 9
//index is slide number
// slides.forEach(function(slide, index){
//     slide.style.left = `${index * 100}%`;
// });

// let counter = 0;
// nextBtn.addEventListener('click',function(){
//     counter++;
//     carousel()
// });
// previousBtn.addEventListener('click',function(){
//     counter--;
//     carousel()
// });


// function carousel(){
//     slides.forEach (function (slide){
//         slides.style.transform = translateX(-${counter *
//             100}%);
//     });
// }




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider-smallBox");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

