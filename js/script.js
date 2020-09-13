$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".top").fadeIn();
    } else {
      $(".navbar").removeClass("sticky");
      $(".top").fadeOut();
    }
  });

  // Go Top Button
  $(".top").click(function () {
    scroll(0, 0);
  });

  // Menu Toggler
  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  // Lightbox
  $(".image").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });
});
