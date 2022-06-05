// fixed top navbar
document.getElementById("navbar").style.position = "fixed";

// javascript download button
$(document).ready(function(){
    $("#download").click(function(){
      alert("Document not found. Please come back later.");
    });
  });

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