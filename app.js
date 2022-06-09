(function ($) {
  "use strict";
  // Back to top button
  
  new WOW().init();
  $(window).scroll(function () {
    if ($(".w-back-to-top").length > 0) {
      if ($(this).scrollTop() > 100) {
        $(".w-back-to-top").fadeIn("slow").addClass("show");
      } else {
        $(".w-back-to-top").fadeOut("slow").removeClass("show");
      }
    }
  });
  if ($(".w-back-to-top").length > 0) {
    $(".w-back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });
  }

  if ($(".navbar-nav").length > 0) {
    $(".navbar-nav a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        $("html, body").animate(
          {
            scrollTop: $(this.hash).offset().top - 42,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".navbar-nav").length) {
          $(".navbar-nav .active").removeClass("active");
          $(".collapse.show").removeClass("show");
          $(this).closest("a").addClass("active");
        }
      }
    });
  }

  if ($("#js-w-loading").length > 0) {
    $("#js-w-loading").fadeOut(2000, "easeInOutExpo", function () {
      $(".w-spinner").delay(1000).fadeIn(1500, "easeInOutExpo");
    });
  }

  setInterval(function () {
    var dNow = new Date();
    var localdate = dNow.toLocaleString("vn-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    $(".w-time").text(localdate);
  }, 1000);

})(jQuery);
