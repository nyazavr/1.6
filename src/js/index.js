import '../css/style.scss'
import * as $ from 'jquery'
import Swiper, { Navigation, Pagination } from 'swiper'

//media
$(window).on( "resize", function() {
  if(window.matchMedia('(min-width: 768px)').matches){
    brendsSwiper.disable();
    techSwiper.disable();
    priceSwiper.disable();
  }else {
    brendsSwiper.enable();
    techSwiper.enable();
    priceSwiper.enable();
  }

  if(window.matchMedia('(min-width: 1024px)').matches){
    $('.container__inner-menu').addClass('inner-menu--open').removeClass('inner-menu--close');
  }else{
    $('.container__inner-menu').addClass('inner-menu--close').removeClass('inner-menu--open');
  }
});


if(window.matchMedia('(min-width: 1024px)').matches){
  $('.container__inner-menu').addClass('inner-menu--open').removeClass('inner-menu--close');
}else{
  $('.container__inner-menu').addClass('inner-menu--close').removeClass('inner-menu--open');
}


//Swiper
const brendsSwiper = new Swiper('.brends--swiper', {
  modules:[Pagination],
  slidesPerView:1.3,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})
const techSwiper = new Swiper('.tech--swiper', {
  modules:[Pagination],
  slidesPerView:1.3,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})
const priceSwiper = new Swiper('.price--swiper', {
  modules:[Pagination],
  slidesPerView:1.1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})



//ReadMore
$('.read-more__button').on('click',function(event) {
  event.preventDefault();
  $($(event.delegateTarget).siblings('.read-more__content')).toggleClass('read-more--close read-more--open');
  $($(event.delegateTarget).children('.expand')).toggleClass('expand--read-more expand--less');
  if($($(event.delegateTarget).children('.expand')).hasClass('expand--less')){
    $($(event.delegateTarget).children('span')).html('Свернуть');
  }else{
    console.log($($($(event.delegateTarget).siblings('.read-more__content')).siblings('.read-more')).hasClass('content-body__read-more'))
    if($($(event.delegateTarget).parent('.read-more')).hasClass('content-body__read-more')){
      $($(event.delegateTarget).children('span')).html('Читать далее');
    }else{
      $($(event.delegateTarget).children('span')).html('Показать всё');
    }
  }
})

//burger menu

$('.header__burger').on('click',function() {
  $('.container__inner-menu').toggleClass('inner-menu--close inner-menu--open');
})
$('.call--button').on('click',function(){
  $('.container__inner-phone').toggleClass('inner-phone--close inner-phone--open');
})
$('.chat--button').on('click',function(){
  $('.container__feedback').toggleClass('inner-feedback--close inner-feedback--open');
})
$('.inner-menu__overlay').on('click',function() {
  $('.container__inner-menu').toggleClass('inner-menu--close inner-menu--open');
})
$('.inner-phone__overlay').on('click',function(){
  $('.container__inner-phone').toggleClass('inner-phone--close inner-phone--open');
})
$('.inner-feedback__overlay').on('click',function(){
  $('.container__feedback').toggleClass('inner-feedback--close inner-feedback--open');
})
console.log('hello!!')