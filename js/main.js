// 네비게이션
 $(function(){
  
        var $firstMenu = $('nav > ul > li'),
            $header =$('header');

        $firstMenu.mouseover(function(){
            $header.stop().animate({height:'500px'},300);
        })

        $header.mouseleave(function(){
            $header.stop().animate({height:'100px'},300);
        });

           
        $('.depth2 li a').hover(
                    // mouseover
                    function(){
                        $(this).css("color", "#fff");
                    },
                    // mouseout
                    function(){
                        $(this).css("color", "rgb(204, 204, 204)");
                    }
                );
        

        var img_num = 0; // 이미지 번호
        var duration = 5000; // 인터벌 시간
        var slider;   // slider 실행 객체 변수
      
        // 초기화
        $('.slider > div').fadeOut();
        $('.slider > div').eq(img_num).fadeIn();
      
        // 
        function changeSlider() {
          // 전체 이미지 fadeOut
          $('.slider > div').fadeOut(1400);
          // 현재 이미지 fadeIn
          $('.slider > div').eq(img_num).fadeIn(1400);
        //   $('.slider > div > img').css("zoom","200%");
          // pager UI 업데이트
          $('.pager > a').removeClass('active');
          $('.pager > a').eq(img_num).addClass('active');
        }
      
        // 슬라이더 재생
        function sliderStart() {
          slider = setInterval(function () {
            // 마지막 이미지 번호이면 처음으로 
            if (img_num >= 2) { img_num = 0 } else {
              // 다음 이미지 번호로
              img_num = img_num + 1;
            }
            changeSlider(img_num);
          }, duration);
        }
      
        // 슬라이더 정지
        function sliderStop() {
          clearInterval(slider);
          console.log('stop');
        }
      
        sliderStart();
      
        // 마우스가 올라가면 슬라이더 정지
        $('.slider, .left, .right').hover(
          function () {
            sliderStop();
          },
          function () {
            sliderStart();
            console.log('start');
          }
        )
    });