function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
  var container = $(".js-circle-container");
  var circle = $(".js-circle");
  var interval = 600; //発生間隔
  var rate = 50; //発生確率
  var timeout = 4500; //消えるまでの時間
  var padding = 100; //描画範囲の余白
  var minX = 0 + padding;
  var minY = 0 + padding;
  var maxX = container.width() - padding;
  var maxY = container.height() - padding;
  var timer = false;

  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      maxX = container.width() - padding;
      maxY = container.height() - padding;
    }, 200);
  });

  setInterval(randomCircle, interval);

  function randomCircle() {
    var num = getRandomInt(1, 100);
    var x = getRandomInt(minX, maxX);
    var y = getRandomInt(minY, maxY);
    var style = {
      top: y,
      left: x
    };

    if (num <= rate) {
      var target = circle.clone().prependTo(container);
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      target.css("stroke", randomColor);
      target.css(style).show();
      setTimeout(function() {
        target.remove();
      }, timeout);
    }
  }
});
