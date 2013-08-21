$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
    $('.pull').toggleClass('glyphicon-chevron-right');
    $('.pull').toggleClass('glyphicon-chevron-left');
  });
});
