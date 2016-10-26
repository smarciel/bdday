$(document).ready(function() {
  $("#about-btn").click( function(event) {
    alert("You clicked the button using JQuery!");
  });

  $(".title").hover(
    function() {
      $(this).addClass("title-anim")
    }, function() {
      $(this).addClass("title-anim")
    }
  );

  $(".title, .image-hovered").hover(
    function() {
      $('.image-hovered').css('display', 'block')
    }, function() {
      $('.image-hovered').css('display', 'block')
    }
  );
});
