 //var audio= new Audio("/path");
function play(type){
  var element = document.getElementById("one"); // get a cop or something?

   circle(element)
    console.log("The type is "+type);
    //audio.play();
}

function circle(element) {  
  $("#1").addClass("active");
  $("#1").css("animation-delay", $(this).index() * 0.4 + "s");
}