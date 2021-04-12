//a 기본 성격 제거
$('a[href="#"]').on('click',function(e){
    e.preventDefault();
});
//문구 marquee
$('.marquee').marquee({
	direction:'left',
	speed:150
});
//header메뉴 클릭시, 부드러운 스크롤 효과
$('.top').on('click',function(){
    $('html, body').animate({ scrollTop:0 }, 200);
}); 
//AOS fade-up
AOS.init();

//mobile ul
$('#menu').on('click',function(){
    $('nav').fadeToggle(200).toggleClass('on');
});
$('.web_btn li a').click(function(){
    $('nav').css('display','none');
});
$(window).resize(function(){
    let wt = $(window).width();
    if(wt > 1200 && $('.web_btn').is(':hidden')) {
        $('.web_btn').removeAttr('style');
    }
});
