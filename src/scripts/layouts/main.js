$(() => {     

    //슬라이드
    $(function(){
        let $slide = $(".swiper-wrapper");
        let slideWidth = $(".swiper-wrapper .swiper-slide").outerWidth(true);
        
        $slide.append($slide.html());

        function rolling(){
            $slide.animate({marginLeft: -slideWidth}, 300, 'linear', function(){
            $slide.append($slide.find(".swiper-slide:first")).css({marginLeft: 0});
            });
        }

        // 2초마다 이동
        setInterval(rolling, 3000);
    });
});