// fixed top navbar
document.getElementById("navbar").style.position = "fixed";

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

// form validation and clearing
function formValidation(event){
  event.preventDefault();

  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let form = document.getElementById("form")

  localStorage.setItem("first_name", firstName);
  localStorage.setItem("last_name", lastName);

  function redirect(){
    alert("message successfully sent")
      window.location.href="#profile"
  }
  redirect()
  form.reset();
}
