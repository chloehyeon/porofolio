//a 기본 성격 제거
$('a[href="#"]').on('click',function(e){
    e.preventDefault();
});


//적응형 웹
let userAgent = navigator.userAgent;

//스마트폰 구분
let smartPhone = ['iphone', 'ipad', 'android'];
for(let i in smartPhone) {
if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhone[i]))) {
alert('모바일 페이지로 이동합니다.');
location = 'http://ihyeon.dothome.co.kr/richemont/m_index.html'; }
}