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
  loop: true,
  
  pagination: {
    el: '.swiper-pagination'
  }
})
const techSwiper = new Swiper('.tech--swiper', {
  modules:[Pagination],
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination'
  }
})
const priceSwiper = new Swiper('.price--swiper', {
  modules:[Pagination],
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination'
  }
})



//ReadMore
let fl=true
$('.read-more__button').on('click',function(event) {
  event.preventDefault();
  $($(event.delegateTarget).siblings('.read-more__content')).toggleClass('read-more--close read-more--open');
  $($(event.delegateTarget).children('.expand')).toggleClass('expand--read-more expand--less');
  if(fl){
    $($(event.delegateTarget).children('span')).html('Свернуть');
    fl=false;
  }else{
    $($(event.delegateTarget).children('span')).html('Читать далее');
    fl=true;
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

console.log('hello!!')