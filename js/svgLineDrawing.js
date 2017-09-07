var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

/*
var css = anime({
  targets: '.lineDrawing ' // Try and fill in the svg files.
});*/

var secondLineDrawing = anime({
  targets: '#lineDrawing02 path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: 2000,
  delay: function(el, i) { return i * 250},
  direction: 'alternate',
  loop: true
});
' '
var basicTimeLine = anime.timeline();

basicTimeLine
  .add({
    targets: '.square',
    translateX: 250,
    easing: 'easeIntOutCubic'
  });
