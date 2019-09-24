function hide(){

	document.getElementById("input").innerHTML = "Thank you! Your message has been sent successfully.";	
	document.getElementById("green_image").src = "assets/images/Check.png";
  document.getElementById("input").classList.toggle("mystyle");
    document.getElementById("green_image").classList.toggle("image")
}


function onof() {
  var x = document.getElementById("booking");
  if (x.style.display === "block" )  {
    x.style.display = "none";
    document.getElementById("menu").classList.toggle("change");
  } else {
    x.style.display = "block";
    document.getElementById("menu").classList.toggle("change");
  }
}