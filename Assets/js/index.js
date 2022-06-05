// fixed top navbar
document.getElementById("navbar").style.position = "fixed";

//menu bar in uppercase
let nav = document.getElementsByClassName("navbar-li");
navMenu = []
function navbar(nav){
    for (item in nav){
        navMenu.push(item)
        console.log(navMenu)
    }

}
navbar()

$(document).ready(function(){
    $("#p1").hover(function(){
      $(this).css("opacity", "0.9");
      }, function(){
      $(this).css("opacity", "0.5");
    });
  });

$(document).ready(function(){
    $("#p2").hover(function(){
        $(this).css("opacity", "0.9");
        }, function(){
        $(this).css("opacity", "0.5");
    });
});