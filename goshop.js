
//
// sticky nav jquery
$(document).ready(function () {
    //scroll header__content
        $(window).on("scroll", function(){
            if ($(window).scrollTop()){
                $("body").addClass("fixed__header");
                
            }else{
                $("body").removeClass("fixed__header");
            }
        });
    // carousel blog
  $("#blogs .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    responsive:{
      330:{
        items:1
      },
      660:{
        items:2
      },
      1000:{
        items:3
      }
    }
    
  });
   
    
        
});

// show nav khi reposive
let navBtn = document.querySelector(".nav--btn");
let navMenu = document.querySelector(".nav__menu");

navBtn.addEventListener("click", showListNav);
function showListNav(){
    navMenu.classList.toggle("nav__active");
}

// tao nav menu da cap2 cho nhieu nut
let link2 = document.querySelectorAll(".listLink2");
let linkBtn =document.querySelectorAll(".dropdown-toggle");

for(let i =0 ; i<link2.length; i++){
    linkBtn[i].addEventListener("click", showLink2);
    function showLink2(){
        link2[i].classList.toggle("Link2_active");
    }
    linkBtn[i].addEventListener("mouseleave", disShow);
    function disShow(){
        link2[i].classList.remove("Link2_active");
    }
}


// js load ptu

let ptuLoad =document.querySelectorAll("#content > div");
console.log(ptuLoad);

// xu ly load ptu

window.addEventListener("scroll", function(){
    for( let i = 0; i<ptuLoad.length ; i++){
        
        let vitriLoad = ptuLoad[i].offsetTop-200;
        if(window.pageYOffset > vitriLoad){
            ptuLoad[i].classList.add("addLoad");
        }else if(window.pageYOffset <= vitriLoad){
            ptuLoad[i].classList.remove("addLoad");
        }
    }

})
// xu ly auto slider sdvs1



let advsImg = document.querySelectorAll(".advs1 img");
let advsTitle = document.querySelector(".advs1 .advs__sale");
let imgSTT = 1;
setInterval(function(){
    if(imgSTT == 1){
        
        advsImg[1].classList.add("advs1_img-active");
        advsImg[0].classList.remove("advs1_img-active");
        
        imgSTT = 2;
    }else{
        advsImg[0].classList.add("advs1_img-active");
        advsImg[1].classList.remove("advs1_img-active");
        imgSTT = 1;
    }
}, 3000);

setInterval(function(){
    advsTitle.classList.toggle("advs__sale--hidden");
}, 1500);


