jQuery(function($) {
  $(".carroussel-top").slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000
  });
  $(".produtos-lancamentos").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $(".galeria-instagram").slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
