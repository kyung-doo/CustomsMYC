
$(() => {
    let moveArrow = '';
    let oldTop = 0;

    $("#wrap").append('<div class="blind d-none"></div>');

    /* ==================================================
        메뉴
        ================================================== */
    $(".gnb-menu li").each(function () {
        const btn = $(this).find("a.gnb-main-trigger");
        btn.on('click', function (){                                    
            $(".gnb-menu li").removeClass('active');
            $(this).parent().addClass('active');
            $('body').addClass('no-scroll')
            $(".main-allmenu").hide();
            $('body').css({'overflow-y': 'hidden'});
            $("#header .allmenu").removeClass('active');
            $(".mobile-dep-menu").removeClass('mobile-active');
            $("#wrap > .blind").show();            
        });
    });

    /* ==================================================
        검은색 배경 클릭하면 메뉴 닫기
        ================================================== */
    $("#wrap > .blind,#header .main-menu .gnb-main-list .gnb-list a").on('click', function () {
        $(".gnb-menu li").removeClass('active');
        $("#wrap > .blind").hide();
        $('body').css({'overflow-y': 'auto'});      
    });

    /* ==================================================
        국내 업체용 [국문]
        ================================================== */
    document.querySelectorAll('#wrap.login #header .header-container .Company-box .Company-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const box = this.closest('#wrap.login #header .header-container .Company-box');
            const isActive = box.classList.toggle('active');

            // title 변경
            this.title = isActive ? '국내 업체용 닫기' : '국내 업체용 열기';
        });
    });

    
});




