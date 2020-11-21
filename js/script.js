//sticky menu start

$(window).scroll(function(){
  $scrollamout = $(window).scrollTop();
  
  if($scrollamout > 700){
    $(".menu").addClass("sticky")
  }else{
    $(".menu").removeClass("sticky")
  }

  if($scrollamout > 700){
    $(".btop").fadeIn()
  }else{
    $(".btop").fadeOut()
  }
})

$(".navbar-collapse a").click(function(){
  $(".navbar-collapse").collapse('hide')
})


//sticky menu end

//btop button start
$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})


//btop button end



//assets slider start

$('#assets-part .main-box').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
    arrows:false,
  autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
          infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          infinite: true,
          arrows:false,
          dots:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});



//assets slider end
//veno box start


$(document).ready(function(){
    $('.venobox').venobox(); 
});
//veno box end
//access part slider start



$('#access-part .main-box').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
    arrows:false,
  autoplaySpeed: 2000,
  infinite:true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
          infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          infinite: true,
          arrows:false,
          dots:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});












//access part slider end