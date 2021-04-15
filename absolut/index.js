//a 기본 성격 제거
$('a[href="#"]').on('click',function(e){
    e.preventDefault();
});

//메뉴 slideUP, slideDown
$('.menu').on('click',function(){
    $('nav').slideDown(300);
});
$('.close').on('click',function(){
    $('nav').slideUp(300);
});

//Show me more btn 효과
$('.st_btn').on({
    'mouseenter' : function(){
        $(this).css({'box-shadow':'none'});
    },
    'mouseleave' : function(){
        $('.st_btn').css({'box-shadow':'5px 5px #000'});
        $('.st_btn').css({'background-color':'#fff'});
    }
});

//ABSOLUT lineup images MouseEvent
let swiper1 = new Swiper('.wrap', {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  breakpoints: {
  480: {
      slidesPerView: 6,
      spaceBetween: 20
  }
  },
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});

$('.absolut_up img').on('click',function(){
  $('.absolut_up img').css('margin-top','20vh');
  $(this).css('margin-top','0');
});

//Swiper list
let swiper2 = new Swiper('.s_list', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: true
});