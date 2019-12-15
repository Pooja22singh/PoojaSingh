const carousel_parent=document.querySelector("#mainTrack");
const carousel_slides= Array.from(carousel_parent.children);
const prevBtn=document.querySelector("#arrow-left");
const nextBtn=document.querySelector("#arrow-right");
const slideWidth = carousel_slides[0].getBoundingClientRect().width;
//counters
//const setSlidePosition = (slide,index) => {
//    
//    slide.style.left=slideWidth*index+ 'px';
//}
//
//carousel_slides.forEach(setSlidePosition);

let counter=1;

carousel_parent.style.transform= 'translateX('+(-slideWidth*counter)+'px)';

setInterval(function(){
    bannerloop();
},3000);
function bannerloop(){
     if(counter>=carousel_slides.length-1)
        return;
    carousel_parent.style.transition= "transform 0.2s ease-in-out";
    counter++;
    carousel_parent.style.transform= 'translateX('+(-slideWidth*counter)+'px)';
}
nextBtn.addEventListener('click',()=>{
      if(counter>=carousel_slides.length-1)
        return;
    carousel_parent.style.transition= "transform 0.2s ease-in-out";
    counter++;
    carousel_parent.style.transform= 'translateX('+(-slideWidth*counter)+'px)';
});
prevBtn.addEventListener('click',()=>{
    if(counter<=0)
        return;
    carousel_parent.style.transition= "transform 0.2s ease-in-out";
    counter--;
    carousel_parent.style.transform= 'translateX('+(-slideWidth*counter)+'px)';
});
carousel_parent.addEventListener('transitionend',()=>{
    
    if(carousel_slides[counter].id==='cloneLast'){
          carousel_parent.style.transition= "none";  
        counter=carousel_slides.length-2;
         carousel_parent.style.transform= 'translateX('+(-slideWidth*counter)+'px)';
    }
    
     if(carousel_slides[counter].id==='cloneFirst'){
          carousel_parent.style.transition= "none";  
        counter=carousel_slides.length-counter;
          carousel_parent.style.transform= 'translateX('+(-slideWidth*counter)+'px)';
    }
    
});