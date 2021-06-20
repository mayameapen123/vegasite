$(document).ready(function(){   

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var t = $(".main-content").scrollTop()
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
$( ".row_01" ).mouseover(function() {
   $( ".p01" ).addClass( "redbold" );

    $( ".p02" ).removeClass( "redbold" );
     $( ".p03" ).removeClass( "redbold" );
      $( ".p04" ).removeClass( "redbold" );
});




$( ".row02" ).mouseover(function() {
   $( ".p02" ).addClass( "redbold" );

    $( ".p01" ).removeClass( "redbold" );
     $( ".p03" ).removeClass( "redbold" );
      $( ".p04" ).removeClass( "redbold" );
});

$( ".row03" ).mouseover(function() {
   $( ".p03" ).addClass( "redbold" );

    $( ".p01" ).removeClass( "redbold" );
     $( ".p02" ).removeClass( "redbold" );
      $( ".p04" ).removeClass( "redbold" );
});

$( ".row04" ).mouseover(function() {
   $( ".p04" ).addClass( "redbold" );

    $( ".p01" ).removeClass( "redbold" );
     $( ".p03" ).removeClass( "redbold" );
      $( ".p02" ).removeClass( "redbold" );
});



});
$(".contactus").on("click",function(){
gsap.to(window, {duration: 2, scrollTo: 5500});
});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}