$(function () {
  $(".menu").click(function () {
    $("#menu_modal").show();
    $(".menu").hide();
  });
  var w = $(window).width();

  $(window).resize(function () {
    w = $(window).width();
    if (w > 1000) {
      $(".menu").hide();
    } else {
      $("#menu_modal").hide();
      $(".menu").show();
    }
  });

  $(".container").click(function () {
    if (w <= 1000) {
      $("#menu_modal").hide();
      $(".menu").show();
    }
  });

  $("#close").click(function () {
    if (w <= 1000) {
      $("#menu_modal").hide();
      $(".menu").show();
    }
  });
});

$(function () {
  // ページプラグインの埋め込みコードを返す
  function pagePluginCode(w) {
    // 幅に応じて高さを変更する場合は、変数 h に高さの値を代入
    var h = 1000;
    // console.log(w + "," + h);
    return (
      '<div class="fb-page" data-href="https://www.facebook.com/THPRensemble/" data-tabs="timeline" data-width="' +
      w +
      '" data-height="' +
      h +
      '" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/THPRensemble/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/THPRensemble/">打楽器団THPR</a></blockquote></div>'
    );
  }
  var facebookWrap = $(".facebook-wrapper");
  var fbBeforeWidth = ""; // 前回変更したときの幅
  var fbWidth = facebookWrap.width(); // 今回変更する幅
  var fbTimer = false;
  $(window).on("load resize", function () {
    if (fbTimer !== false) {
      clearTimeout(fbTimer);
    }
    fbTimer = setTimeout(function () {
      fbWidth = Math.floor(facebookWrap.width()); // 変更後の幅を取得し、小数点以下切り捨て
      // 前回の幅から変更があった場合のみ処理
      if (fbWidth != fbBeforeWidth) {
        facebookWrap.html(pagePluginCode(fbWidth)); // ページプラグインのコード変更
        window.FB.XFBML.parse(); // ページプラグインの再読み込み
        fbBeforeWidth = fbWidth; // 今回変更分を保存
      }
    }, 200);
  });
});
