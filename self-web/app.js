//console.log('あ');
$('.js-stamp').slick({
  dots:true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  variableWidth:true,
  
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
//$(function() {
//    var topBtn = $('#page-top');    
//   //スクロールしてトップ
//    topBtn.click(function () {
//        $('body,html').animate({
//            scrollTop: 0
//        }, 500);
//        return false;
//    });
//});

//トップに戻る=スムーズクロール
  $('.js-scroll').on('click',function(){
    $('body,html').animate({scrollTop:0},1000);
  });
//  
//  $('.js-scroll').on('click',function(){
//    $('スクロール対象=body,html').animate({sdrollTop:座標},時間);
//  });
