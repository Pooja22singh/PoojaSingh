$(document).ready(function (){
    typeWriter();
    bindEvents();
});

function typeWriter() {
var typed= new Typed("#innerTyping",{
    strings:["I am a Web Developer.","I live in Gurugram, India."],
    typeSpeed:40,
    backSpeed:100,
    backDelay:1000
});
}

function bindEvents(){
   $(".navbar-toggle").bind("click",openMenu);
$(".headerDiv ul li").bind("click",openMenu);
   var myNav = document.getElementsByTagName('header');
   window.onscroll = function () { 
    "use strict";
    if (window.pageYOffset >= 200 ) {
        $(myNav).addClass("nav-colored");
        $(myNav).removeClass("nav-transparent");
    } 
    else {
      $(myNav).removeClass("nav-colored");
        $(myNav).addClass("nav-transparent");
    }
};
}

function openMenu(){
    $(".headerDiv ul").toggleClass("open");
    $(".headerDiv ul li").toggleClass("liopen");
}

function load(){ document.getElementById("preloader").style.display="none";
}