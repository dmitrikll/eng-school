$(document).ready(function(){
    $('.reviews__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.reviews__slider--nav'
    });
    $('.reviews__slider--nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.reviews__slider',
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true
    });
    });