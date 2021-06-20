$(document).ready(function(){   

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // Do something
    if (scroll>400){
      $(".transparent").css("background-color", "#B1010A");
      $(".logo").css("color", "white");
    }

    if (scroll<400){
      $(".transparent").css("background-color", "");
     
    }
  
});

// scroll function 

$(".contactus").on("click",function(){
gsap.to(window, {duration: 2, scrollTo: 5500});
});


});