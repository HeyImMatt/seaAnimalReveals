$(document).ready(function() {
  $('.clickable').click(function() {
    $('#walrus-showing').toggle();
    $('#walrus-hidden').toggle();
  });

  $('.clickable').click(function() {
    $('#peekABoo').fadeOut();
    $('#peekABoo').fadeIn();
  });
});

