document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
    }
  });


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


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});









