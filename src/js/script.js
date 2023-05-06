// $(document).ready(function () {
//   $(".carousel__inner").slick({
//     speed: 1200,
//     adaptiveHeight: true,
//     autoplay: false,
//     autoplaySpeed: 5100,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/carousel/left.svg"></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/carousel/right.svg"></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false,
  autoHeight: true,
});

document.querySelector(".prev").addEventListener("click", function () {
  slider.goTo("prev");
});
document.querySelector(".next").addEventListener("click", function () {
  slider.goTo("next");
});

const sliderWrapper = tns({
  container: ".my-slider",
  items: 1,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
    },
    700: {
      gutter: 30,
    },
    900: {
      items: 3,
    },
  },
});
