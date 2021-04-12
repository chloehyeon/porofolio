$('#menu').on('click',function(){
    $('.gnb').slideToggle(100);
});
$('.sponsered img').hover(function(){ 
    $(this).attr("src", $(this).attr("src").replace("_b.png", ".png"),); 
    }, function(){ 
    $(this).attr("src", $(this).attr("src").replace(".png", "_b.png"),); 
});
$('a[href="#"]').click(function(e) {
    e.preventDefault();
});