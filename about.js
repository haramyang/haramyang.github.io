
// link scrolls down to the part of the page
$(document).ready(function(){
   $("#link1").click(function(){
        $path=$("#box1").offset().top;
        $('html, body').animate({scrollTop:$path},1000);
   });
   $("#link2").click(function(){
        $path=$("#box2").offset().top;
        $('html, body').animate({scrollTop:$path},1000);
   });
   $("#link3").click(function(){
        $path=$("#box3").offset().top;
        $('html, body').animate({scrollTop:$path},1000);
   });
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}