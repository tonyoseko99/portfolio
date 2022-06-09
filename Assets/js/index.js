// fixed top navbar
document.getElementById("navbar").style.position = "fixed";

//menu bar in uppercase
$(document).ready(function(){
    $(".navbar-li").hover(function(){
      $(this).css("text-transform", "uppercase");
      }, function(){
      $(this).css("text-transform", "none");
    });
  });


// change the opacity of the cards on hover
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

// contact form functionality
$(document).ready(function(){
  $("form").submit(function(){
    alert("Submitted");
  });
});