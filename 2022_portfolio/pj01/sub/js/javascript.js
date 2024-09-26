$(function(){


    // 컨텐츠 스크롤 인터랙션
    $('header .wrap2').addClass('on')
    $('article .sec01').addClass('on')


    // 1뎁스 메뉴에 마우스오버 시 2뎁스 메뉴 띄우기

    $('.menu_wrap').mouseenter(function(){
        $('.menu_depth2').addClass('on')
    })
    $('.menu_wrap').mouseleave(function(){
        $('.menu_depth2').removeClass('on')
    })


    // 1뎁스 메뉴 마우스 오버 효과
    $('.menu_depth2 ul').mouseenter(function(){
        let i = $(this).index()
        $('.menu_depth1 li').eq(i).find('a').css({'color':'rgba(255,255,255,0.7)'})
    })
    $('.menu_depth2 ul').mouseleave(function(){
        $('.menu_depth1 li a').css({'color':'#fff'})
    })


    $(window).scroll(function(){

        // 헤더를 지나 스크롤 시 픽스 메뉴 뜨기
        scTop = $('html,body').scrollTop()
        console.log(scTop)
        if (scTop >= 170) {
            $('.gnb_02_wrap').addClass('show')
        }
        if ( scTop >= 0 && scTop < 170) {
            $('.gnb_02_wrap').removeClass('show')
        }


        // 컨텐츠 스크롤 인터랙션
        if ( scTop >= 1000) {
            $('article .sec02').addClass('on')
        }
    })







































})