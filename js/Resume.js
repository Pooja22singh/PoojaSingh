$(document).ready(function (){
    typeWriter();
    bindEvents();
    
         /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		
});

function typeWriter() {
var typed= new Typed("#innerTyping",{
    strings:["I am a Front-End Developer.","I live in Gurugram, India."],
    typeSpeed:40,
    backSpeed:100,
    backDelay:1000
});
}

function bindEvents(){
  $("#icon-group").bind("click",openMenu);
$(".headerDiv ul li").bind("click",closeMenu);
   var myNav = document.getElementsByTagName('header');
//   window.onscroll = function () { 
//    "use strict";
//    if (window.pageYOffset >= 200 ) {
//        $(myNav).addClass("nav-colored");
//        $(myNav).removeClass("nav-transparent");
//    } 
//    else {
//      $(myNav).removeClass("nav-colored");
//        $(myNav).addClass("nav-transparent");
//    }
//};
      $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $(myNav).addClass("nav-colored");
        $(myNav).removeClass("nav-transparent");
            } else {
                  $(myNav).removeClass("nav-colored");
        $(myNav).addClass("nav-transparent");
            }
        });
    // Option 2 - jQuery Smooth Scrolling
 $('nav a').on('click', function (e) {
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body')
       .animate({
         scrollTop: $(hash).offset().top
       },900);
   }
 });
     $('#profile a').on('click', function (e) {
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body')
       .animate({
         scrollTop: $(hash).offset().top
       },900);
   }
 });

    
    $(".arrow").bind("click", slideOver);
}

function slideOver(){
    var list=$("#slide").children();
    for(var i=0;i<list.length;i++)
        {
             $(list[i]).toggleClass("displayNone");
        }
  }

function openMenu(){
     $(".before").toggleClass("beforeNext");
//       $(".after").toggleClass("afterNext");
       $(".after").toggleClass("afterNext");
    $(".headerDiv ul").toggleClass("open");
    $(".headerDiv ul li").toggleClass("liopen");
   
}
function closeMenu(){
    $(".headerDiv ul").removeClass("open");
    $(".headerDiv ul li").removeClass("liopen");
     $(".before").toggleClass("beforeNext");
//       $(".after").toggleClass("afterNext");
       $(".after").toggleClass("afterNext");
   
}
function load(){ document.getElementById("preloader").style.display="none";
}