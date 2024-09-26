$(function(){

// 변수 설정 -------------------------------
const
winht = $(window).innerHeight()
pjTop_01 = $('.project01').offset().top
pjTop_02 = $('.project02').offset().top
pjTop_03 = $('.project03').offset().top
landingTop = $('header').offset().top
ld_ht = $('header').height()
ld_sticky = $('header .sticky').height()
page01 = $('.page01').offset().top
page02 = $('.page02').offset().top
pf_ht = $('.page02').height()
pf_sticky = $('.page02 .sticky').height()
page03 = $('.page03').offset().top
page04 = $('.page04').offset().top
footer = $('footer').offset().top
// ----------------------------------------

//로고 위 마우스오버 시 UP 아이콘 나타나기
$('.logo').mouseenter(function(){
    $('.logo a').eq(0).stop().fadeOut()
    $('.logo a').eq(1).stop().fadeIn()
})
$('.logo').mouseleave(function(){
    $('.logo a').eq(1).stop().fadeOut()
    $('.logo a').eq(0).stop().fadeIn()
})


// 모달팝업 뒤 dimmed 배경 숨기기 
$('.popup_bg').hide()


// 랜딩페이지 스크롤애니메이션 요소 변수설정 -----------------------------------------
const
txt01 = $('.landing_title h2 span').eq(0)
txt02 = $('.landing_title h2 span').eq(1)
txt03 = $('.landing_title h2 span').eq(2)
txt04 =$('.landing_title h2 span').eq(3)
txt05 =$('.landing_title h2 span').eq(4)
txt06 = $('.landing_title h2 span').eq(5)
txt07 = $('.landing_title h2 span').eq(6)
txt08 = $('.landing_title h2 span').eq(7)
txt09 = $('.landing_title h2 span').eq(8)

let
txt01_Y = Number(txt01.css('transform').split(', ')[5].replace(')',''))
txt02_Y = Number(txt02.css('transform').split(', ')[5].replace(')',''))
txt03_Y = Number(txt03.css('transform').split(', ')[5].replace(')',''))
txt04_Y = Number(txt04.css('transform').split(', ')[5].replace(')',''))
txt05_Y = Number(txt05.css('transform').split(', ')[5].replace(')',''))
txt06_Y = Number(txt06.css('transform').split(', ')[5].replace(')',''))
txt07_Y = Number(txt07.css('transform').split(', ')[5].replace(')',''))
txt08_Y = Number(txt08.css('transform').split(', ')[5].replace(')',''))
txt09_Y = Number(txt09.css('transform').split(', ')[5].replace(')',''))
bg_scale = Number($('.bg').css('transform').split(', ')[0].replace('matrix(',''))
// -------------------------------------------------------------------------


$(window).scroll(function(){
    
    let scTop = $('html,body').scrollTop()
    $('.scTop').text(scTop)

    // 메인타이틀 '안녕하세요' 스크롤 애니메이션 동작
    let ld_step = (ld_ht-ld_sticky-100)/20  // n=20단계

    for(let i=0; i<21; i++){
        if(scTop >= ld_step*i && scTop < ld_step*(i+1)){
            txt01.css({'transform':'translateY('+ Number(txt01_Y - (txt01_Y/20*i)) +'px)'})
            txt02.css({'transform':'translateY('+ Number(txt02_Y - (txt02_Y/20*i)) +'px)'})
            txt03.css({'transform':'translateY('+ Number(txt03_Y - (txt03_Y/20*i)) +'px)'})
            txt04.css({'transform':'translateY('+ Number(txt04_Y - (txt04_Y/20*i)) +'px)'})
            txt05.css({'transform':'translateY('+ Number(txt05_Y - (txt05_Y/20*i)) +'px)'})
            txt06.css({'transform':'translateY('+ Number(txt06_Y - (txt06_Y/20*i)) +'px)'})
            txt07.css({'transform':'translateY('+ Number(txt07_Y - (txt07_Y/20*i)) +'px)'})
            txt08.css({'transform':'translateY('+ Number(txt08_Y - (txt08_Y/20*i)) +'px)'})
            txt09.css({'transform':'translateY('+ Number(txt09_Y - (txt09_Y/20*i)) +'px)'})

            $('.bg').css({'transform':'scale('+ Number(bg_scale+((11-bg_scale)/20*i)) +')'})    
        }

        if(scTop < page01-ld_sticky-100){
            $('.landing_title p').removeClass('on')
            $('.bg').removeClass('on')
        }
        if(scTop >= page01-ld_sticky-100){
            $('.bg').css({'transform':'scale(1.0)'})
            $('.bg').addClass('on')
            $('.landing_title p').addClass('on')
        }
    }


    // 1. 프로젝트 순서에 따라 배경색이 바뀐다.
    // 2. 프로젝트 별 패럴랙스 스크롤 애니메이션 동작

    if(scTop < pjTop_01-0.3*winht){
        console.log(pjTop_02)
        $('.page01').css({'background-color': 'rgba(255, 255, 255, 0.5)'})
    }
    if(scTop >= pjTop_01-0.3*winht && scTop <pjTop_02 - 0.3*winht) {
        $('.page01').css({'background-color': 'rgba(135, 207, 235, 0.4)'})
        $('.projects').removeClass('show')
        $('.project01').addClass('show')
    }
    if(scTop >= pjTop_02-0.3*winht && scTop < pjTop_03 -0.3*winht) {
        $('.page01').css({'background-color':'rgba(255, 166, 0, 0.3)'})
        $('.projects').removeClass('show')
        $('.project02').addClass('show')
    }
    if(scTop >= pjTop_03 - 0.3*winht) {
        $('.page01').css({'background-color':'rgba(128, 0, 128, 0.3)'})
        $('.projects').removeClass('show')
        $('.project03').addClass('show')
    }


    // 프로필 쪽에 들어갈때 로고와 메뉴버튼의 컬러가 #333으로 바뀐다.
    if(scTop >= page02-50 && scTop < page03){
        $('.logo').addClass('black')
        $('.hamburger_btn').addClass('black')

    }else {
        $('.logo').removeClass('black')
        $('.hamburger_btn').removeClass('black')
    }

    // page02 프로필의 이모지가 중앙으로 모인다.
    if(scTop >= page02-0.3*winht && scTop < page03){
        $('.page02').addClass('show')
    }else {
        $('.page02').removeClass('show')
    }

    // page04 스크롤 시 그래프의 막대 높이가 늘어난다.
    if(scTop >= page04-0.3*winht && scTop < footer){
        $('.page04').addClass('show')
    }else {
        $('.page04').removeClass('show')
    }

    // 푸터 영역 도달 시 이메일 주소가 나타난다.
    if(scTop >= footer-50){
        $('footer').addClass('show')
    }else{
        $('footer').removeClass('show')
    }

})


// '이렇게만들었어요' 버튼 클릭 시 모달팝업 창 띄우기
$('.project01 .btn li').eq(1).click(function(){
    $('.popup_inner').animate({scrollTop:0},0)
    $('.popup_bg').fadeIn(600)
    $('.popup .contents li').removeClass('on')
    $('.popup .contents li').eq(0).addClass('on')
    $('.popup').addClass('show')
    $('body').addClass('scrLock')
})
$('.project02 .btn li').eq(1).click(function(){
    $('.popup_inner').animate({scrollTop:0},0)
    $('.popup_bg').fadeIn(600)
    $('.popup .contents li').removeClass('on')
    $('.popup .contents li').eq(1).addClass('on')
    $('.popup').addClass('show')
    $('body').addClass('scrLock')
})


// 디테일뷰 모달팝업 - close버튼 누르면 팝업창사라지기
$('.popup .closeBtn').click(function(){
    $('.popup_bg').fadeOut(600)
    $('.popup').removeClass('show')
    $('body').removeClass('scrLock')
})

// 디테일뷰 모달팝업 - TOP 버튼 누르면 맨 위로 가기
$('.popup .topBtn').click(function(){
    $('.popup_inner').animate({scrollTop:0}, 700, 'easeInOutCubic')
})


// 사이드바 메뉴 펼쳤다 닫기
$('.hamburger_btn').click(function(){
    $('.menu').addClass('show')
})
$('.menu .closeBtn').click(function(){
    $('.menu').removeClass('show')
})

// 사이드바 메뉴 li 클릭시 해당 컨텐츠로 이동
$('.menu li').click(function(){
    let i = $(this).index()
    if(i==0){
        $('html,body').animate({scrollTop:page01+120},1000,'easeInOutCubic')
    }
    if(i==1){
        $('html,body').animate({scrollTop:page02},1000,'easeInOutCubic')
    }  
    if(i==2){
        $('html,body').animate({scrollTop:page04},1000,'easeInOutCubic')
    }  
    if(i==3){
        $('html,body').animate({scrollTop:footer},1000,'easeInOutCubic')
    }  
})






// 로고를 누르면 스크롤이 맨 위로 올라오기
$('.logo').click(function(){
    $('html,body').animate({scrollTop:0},0)
})


// 윈도우창 너비 확인
// $(window).resize(function(){
//     let winwd = $(window).innerWidth()
//     $('.winwd').text(winwd)
// })


})