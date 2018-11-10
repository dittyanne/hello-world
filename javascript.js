// var (variable) can be updated and modified
// the for loop makes all of pur images invisible, the style.display="block" makes a single image visible
var slideIndex = 0;
showSlides();
function showSlides(){
    // console.log('Hello',slideIndex)
    var slides = document.getElementsByClassName("myImages");
    // retreives anything with the name "myImages"
    for(var i=0; i<slides.length;i++){
        slides[i].style.display="none";
        // slides= array[img1,img2,img3], style.display=>accesses and changing the images attributes
    }
    slideIndex++;
    if(slideIndex >= slides.length){
        slideIndex=0;
    }
    slides[slideIndex].style.display="block";
    setTimeout(showSlides,4000);
    // setTimeout takes 2 inputs(showSlides function and the timeout), waits 4000ms and calls the function again
}