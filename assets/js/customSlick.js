$(document).ready(function() {
  // $('.demo').slick();
  $('.mob-pricing-slider').slick({
    draggable: false,
    speed: 500,
    infinite: true,
    arrows: true,
    prevArrow: '<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fas fa-chevron-right"></i></div>',
dots: true,
infinite: true,
slidesToShow: 3,
slidesToShow: 1,
  centerMode: true,
  variableWidth: true
  });



 //  $('.prize-slider').slick({
 //    arrows: true,
 //    prevArrow: '<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>',
 //    nextArrow: '<div class="slick-next"><i class="fas fa-chevron-right"></i></div>',
 //    draggable: true,
 //
 // centerMode: true,
 // // variableWidth: true,
 // slidesToShow: 1,
 // arrows: true,
 // dots: true,
 // infinite: false
 //  });


});
