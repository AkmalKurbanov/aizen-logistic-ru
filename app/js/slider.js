import 'slick-carousel';

$('.geography-js').slick({
  speed: 1000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplaySpeed: 2000,
  draggable: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      }
    },
  ]
});

$('.countries-js').slick({
  speed: 1000,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  draggable: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});
$('.shops-js').slick({
  speed: 1000,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});

$('.products-js').slick({
  speed: 1000,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
 
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      }
    },
    
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      }
    },
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});
