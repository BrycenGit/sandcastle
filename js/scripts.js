$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".text-showing").toggle();
    $(".text-hidden").toggle();

  });
  $(".clickable2").click(function() {
    $(".img-showing").toggle();
    $(".img-hidden").toggle();
  });

});