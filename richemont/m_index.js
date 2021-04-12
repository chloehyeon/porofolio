//main Swiper slide
let swiper1 = new Swiper('.main_list', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true
});

//Best Product Swiper slide
let swiper2 = new Swiper('.pro_list', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    loop:true
  });

//메뉴 slideUP, slideDown
$('.menu').on('click',function(){
    $('.gnb').slideDown(300);
});
$('.close').on('click',function(){
    $('.gnb').slideUp(300);
});