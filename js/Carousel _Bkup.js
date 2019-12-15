const carousel_container = document.querySelector("#slide #innerContent");
const carousel_parent=document.querySelector("#mainTrack"); 
const slides = Array.from(carousel_parent.children);
const prevButton = document.querySelector("#arrow-left");
const nextButton = document.querySelector("#arrow-right");
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide,index) => {
    
    slide.style.left=slideWidth*index+ 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide= (carousel_parent,current_slide,target_slide,transition) =>{
    if(transition===false)
        carousel_parent.style.transition='none'
    else
      carousel_parent.style.transition='transform 0.2s ease-in';  
carousel_parent.style.transform='translateX(-'+target_slide.style.left+')';

current_slide.classList.remove("current_slide");   
target_slide.classList.add("current_slide");   
    
}

nextButton.addEventListener('click',e=>{
   
const currentSlide=document.querySelector(".current_slide");
    if( currentSlide.classList.contains("last_slide")){
        const prevSlide=currentSlide.previousElementSibling;
      moveToSlide(carousel_parent,currentSlide,prevSlide,false);
    }
    else{
        const nextSlide=currentSlide.nextElementSibling;
    moveToSlide(carousel_parent,currentSlide,nextSlide,true);
    }

});
prevButton.addEventListener('click',e=>{
const currentSlide=document.querySelector(".current_slide");
      if( currentSlide.classList.contains("first_slide")){
       const nextSlide=currentSlide.nextElementSibling;
    moveToSlide(carousel_parent,currentSlide,nextSlide,false);
    }
    else{
const prevSlide=currentSlide.previousElementSibling;
      moveToSlide(carousel_parent,currentSlide,prevSlide,true);
    }
});