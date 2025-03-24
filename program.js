window.onload = function() {
  var elements = document.querySelectorAll('.Intro-text, .Instruction');

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.transform = 'translateY(0)';
    elements[i].style.opacity = '1';
  }
};
