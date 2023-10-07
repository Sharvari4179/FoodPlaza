$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });

var loader;
function loadNow(opacity){
    if(opacity <=0){
        displayContent();
    }
    else{
       loader.style.opacity = opacity;
       window.setTimeout(function(){
        loadNow(opacity - 0.05)
       }, 100) 
    }
}

function displayContent(){
    loader.style.display = 'none';
    document.getElementById('slider').style.display ='block';
}

document.addEventListener("DOMContentLoaded", function(){
    loader = document.getElementById('preloader');
    loadNow(1);
})