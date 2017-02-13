

$(document).ready(function(){
 $('.team--list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  prevArrow: "",
  nextArrow: "",
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});

 $('.clients--list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  prevArrow: "",
  nextArrow: "",
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
   {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});

 $('.testimonials--list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  prevArrow: "",
  nextArrow: "",
  slidesToShow: 1,
  slidesToScroll: 1,
});

});