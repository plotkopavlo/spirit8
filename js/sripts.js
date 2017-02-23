

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

  WorksItem= document.getElementsByClassName("works--item");
  function hiddenAllWorksItem()
  {
    for(let i=0; i< WorksItem.length; i++)
    {
      WorksItem[i].hidden=true;
    }
  }

  function visibleWorksItem (filter) {
    FilterItem= document.getElementsByClassName("works--" + filter)
    for(let i=0; i<FilterItem.length; i++)
    {
      FilterItem[i].hidden=false;
    }

  }


  WorksButton= document.getElementsByClassName("works--button");
  for(let i=0; i<WorksButton.length; i++)
  {
    WorksButton[i].onclick=function (){
      for(let i=0; i<WorksButton.length; i++)
      {
        WorksButton[i].classList.remove("works--button--active");
      }
      this.classList.add("works--button--active");

      hiddenAllWorksItem();
      visibleWorksItem(this.getAttribute('data-filter') )
    }
  }

  $('a[href^="#"]').click(function(){
    var el = $(this).attr('href');
    $('body').animate({
      scrollTop: $(el).offset().top}, 2000);
      return false;
    });
});

