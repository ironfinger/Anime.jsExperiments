console.log("SCRIPT CONNECTED");
$(document).ready(function() {
  $('.button01').hover(function() {
    var svgDrawBtn = anime({
      targets: '.svg-icon',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate'
    });
  });
});
