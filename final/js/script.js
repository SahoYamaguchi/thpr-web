$(function() {
  $(".menu").click(function() {
    $("#menu_modal").show();
    $(".menu").hide();
  });
  var w = $(window).width();

  $(window).resize(function() {
    w = $(window).width();
    if (w > 1000) {
      $(".menu").hide();
    } else {
      $("#menu_modal").hide();
      $(".menu").show();
    }
  });

  $(".container").click(function() {
    if (w <= 1000) {
      $("#menu_modal").hide();
      $(".menu").show();
    }
  });

  $("#close").click(function() {
    if (w <= 1000) {
      $("#menu_modal").hide();
      $(".menu").show();
    }
  });
});
