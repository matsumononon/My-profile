//console.log('あ');
$('.js-stamp').slick({
  dots:true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  
  responsive:[
    {
      breakpoint: 960,
        settings:{
          slidesToShow:3,
          slidesToScroll:3
        }
    },{
      breakpoint: 480,
        settings:{
          slidesToShow:2,
          slidesToScroll:2
        }
    }
  ]
  
});
