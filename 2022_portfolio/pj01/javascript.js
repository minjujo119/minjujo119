$('document').ready(function(){


    // con05_img 인스타그램 이미지 transition 설정
    for(nn=0; nn<12; nn++){
        $('.con05_img li').eq(nn).css({
            'transition':'all 1.2s '+ 0.1*nn +'s'+' ease'
        });
    }


    // 랜딩이미지 자동 슬라이드

    let tt = 0
    setInterval(function(){

        if(tt<4){
            tt++;
            $('.landing_bg li').removeClass('on');
            $('.landing_bg li').eq(tt).addClass('on');

            $('.landing_title li').removeClass('on');
            $('.landing_title li').eq(tt).addClass('on');

            $('.landing_btn li').removeClass('on');
            $('.landing_btn li').eq(tt).addClass('on');
        }

        if(tt==3) {tt = -1};

    },6000)


    // 랜딩이미지 버튼 클릭 시 배경이미지 전환

    $('.landing_btn li').click(function(){

        let i = $(this).index();

        $('.landing_bg li').removeClass('on');
        $('.landing_bg li').eq(i).addClass('on');

        $('.landing_title li').removeClass('on');
        $('.landing_title li').eq(i).addClass('on');

        $('.landing_btn li').removeClass('on');
        $('.landing_btn li').eq(i).addClass('on');

    })



    // 2뎁스 메뉴 슬라이드다운 설정

    // header의 gnb 안에 있는 menu에 마우스 오버 시
    // submenu가 나타난다.

    $('.menu li').mouseenter(function(){

        $('.submenu').stop().show(0);
        let i = $(this).index();
        $('.menu li').eq(i).addClass('on');
        $('.submenu ul').eq(i).addClass('on');
    })

    $('.menu li').mouseleave(function(){

        $('.submenu').stop().hide(0);
        $('.menu li').removeClass('on');
        $('.submenu ul').removeClass('on');
    })

    $('.submenu ul').mouseenter(function(){

        $('.submenu').stop().show(0);
        let i = $(this).index();
        $('.menu li').eq(i).addClass('on');
        $('.submenu ul').eq(i).addClass('on');
    })

    $('.submenu ul').mouseleave(function(){

        $('.submenu').stop().hide(0);
        $('.menu li').removeClass('on');
        $('.submenu ul').removeClass('on');
    })


    // 수피아 식물원 사진 슬라이드

    let ts = 0;

    setInterval(function(){
        if(ts<4){
            ts++;
            $('.con02_img li').removeClass('on');
            $('.con02_img li').eq(ts).addClass('on');
        }
        if(ts==3) {
            ts = -1;
        }
    },6000)



    // con01 둘레길 코스 버튼 누르면 코스이미지 바꾸기

    $('.con01_btn li').click(function () {
        let i = $(this).index();
        console.log(i);

        $('.con01_btn li').removeClass('on');
        $('.con01_btn li').eq(i).addClass('on');
        $('.con01_img li').removeClass('on');
        $('.con01_img li').eq(i).addClass('on');
    })


    // con03 진행중인 프로그램 슬라이드 구현

    // con03의 btn 중 첫번째 i를 누르면 #trailer가
    // 왼쪽으로 320px씩 움직인다. 총 8개 오브젝트!

    let n = 0

    $('.con03 .btn span').eq(0).click(function(){
        if(n>0){ 
            n--;
            console.log(n);
            $('#trailer').css({'left':-320*n+'px'});
        }
    })

    // con03의 btn 중 두번째 i를 누르면 #trailer가
    // 오른쪽으로 320px씩 움직인다.

    $('.con03 .btn span').eq(1).click(function(){
        if(n<4){
            n++;
            console.log(n);
            $('#trailer').css({'left':-320*n+'px'});
        }
    })

    // con04 소식과 채용공고 탭바로 전환하기

    $('.con04_notice .tabBtn p').click(function(){
        let i = $(this).index();
        console.log(i);

        $('.con04_notice .tabBtn p').removeClass('on');
        $('.con04_notice .tabBtn p').eq(i).addClass('on');

        $('.con04_notice ul').removeClass('on');
        $('.con04_notice ul').eq(i).addClass('on');
    })

 

    // con04 이벤트배너 무한 슬라이드

    const eventImg = $('.con04_event .slideImg li');
    const eventBtn = $('.event_btn li');
    let setIntervalId;
    let m = 0;

    // con04 이벤트 버튼 클릭 시 순서에 맞게 배너 움직이기
    $('.event_btn li').click(function(){
        $('.event_btn li').removeClass('on'); 
        $(this).addClass('on'); // 버튼 변형

        // 배너이미지 움직이기
        let i = $(this).index();
        eventImg.eq(i-2).css({'left':'-100%'}).stop().animate({'left':'-200%'});
        eventImg.eq(i-1).css({'left':'0'}).stop().animate({'left':'-100%'});
        eventImg.eq(i).css({'left':'100%'}).stop().animate({'left':'0%'});
    })
        

    setIntervalId = setInterval(move,3000);
    function move(){
        m++;
        if (m == 3){m = 0;};
        eventBtn.eq(m-1).trigger('click');
    }

    // 마우스 올리면 멈추고, 떼면 다시 시작하기
    $('.con04_event').mouseenter(function(){
        clearInterval(setIntervalId);
    })
    $('.con04_event').mouseleave(function(){
        setIntervalId = setInterval(move,3000);
    })

    
    // 스크롤 인터랙션 설정

    $(window).scroll(function(){
        let
        scTop = $('html,body').scrollTop(),
        con01 = $('.con01').offset().top,
        con02 = $('.con02').offset().top,
        con03 = $('.con03').offset().top,
        con05 = $('.con05').offset().top,
        con06 = $('.con06').offset().top;

        if (scTop >= con01-300) {
            $('.con01_img').addClass('show')
        }
        if (scTop >= con02-300) {
            $('.con02_txt').addClass('show')
        }
        if (scTop >= con03-300) {
            $('.con03 .slide').addClass('show')
        }
        if (scTop >= con05-300) {
            $('.con05_img li').addClass('show')
        }
        if (scTop >= con06-300) {
            $('.con06 .map_txt').addClass('show')
        }
    })


    //너비 측정하기
    // let width = $(window).innerWidth()
    // $('.width').text(width)
    // $(window).resize(function(){
    //     let width = $(window).innerWidth()
    //     $('.width').text(width)
    // })
    
})