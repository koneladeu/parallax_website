// index.js

window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var parallaxLayers = document.getElementsByClassName('parallax-layer');
  
    for (var i = 0; i < parallaxLayers.length; i++) {
      var speed = 0.5; // Adjust this value to control the parallax speed
      var yPos = -(scrolled * speed) + 'px';
      parallaxLayers[i].style.transform = 'translateY(' + yPos + ')';
    }
  });
  