console.log("Time line connected");

var cssSelector = anime({
  targets: 'div',
  translateX: 500, // Animate all divs left position to 80%
  opacity: .8, // Animate all divs opacity to .8
  backgroundColor: '#FFF',  // Animate all divs background color to #FFF
  duration: 15000,
  easing: 'easeOutExpo'
});

//var cssSelecterTimeline = anime.timeline();
/*
cssSelecterTimeline
  .add({
    targets: '#square01',
    translateX: 250,
    backgroundColor: black,
    easing: 'easeOutExpo'
  }); */
