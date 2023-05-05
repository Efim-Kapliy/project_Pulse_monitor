$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1200,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 5100,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/carousel/left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/carousel/right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
