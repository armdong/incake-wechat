(function() {

    $(function() {

        var $aImg = $('#slide').find('img');
        var swiper = null;
        var containerWidth = 0;

        fnSlide();

        $(window).on('resize', function() {
            fnSlide();
        });

        // 顶部轮播图
        function fnSlide() {
            containerWidth = $('#slide').width();
            $aImg.css({
                width: containerWidth,
                height: containerWidth / 2
            });
            if (swiper != null) {
                swiper.destroy();
            }
            swiper = null;
            swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                width: containerWidth,
                height: containerWidth / 2,
                loop: true,
                centeredSlides: true,
                autoplay: 5000,
                speed: 1000,
                autoplayDisableOnInteraction: false,
                preloadImages: false,
                lazyLoading: true
            });
        }

        // 开团按钮点击事件
        fnOpen();

        // 提交团购申请
        fnSubmit();

        // 订单查询
        fnQuery();

        // 城市定位
        fnInitCity();
    });

    // 开团
    function fnOpen() {
        var $oPage1 = $('#page-01'),
            $oBtnOpen = $oPage1.find('.btn-open'),
            $oPage2 = $('#page-02'),
            tl = new TimelineLite();

        $oBtnOpen.on('click', function() {

            tl.clear();

            tl.to($oPage1, 1, {
                opacity: 0,
                onComplete: function() {
                    $oPage1.hide();
                }
            });

            tl.to($oPage2, 1, {
                opacity: 1,
                onStart: function() {
                    $oPage2.show();
                }
            }, 1);

        });
    }

    // 提交团购申请
    function fnSubmit(){
        
    }

    // 订单查询
    function fnQuery() {
        var $oPage = $('#page-query'),
            $oFrm = $oPage.find('.frm'),
            $oUl = $oFrm.find('>ul'),
            $oBtnQuery = $oUl.find('.btn-query'),
            $oSuccess = $oFrm.find('.success'),
            $oFail = $oFrm.find('.fail'),
            tl = new TimelineLite();

        $oBtnQuery.on('click', function() {

            tl.clear();

            // TODO 这里处理查询逻辑，团购成功或失败，执行不同结果
            var result = true; // true代表团购成功，false代表团购失败

            if (result) {

                // 团购成功执行逻辑
                tl.to($oSuccess, 1, {
                    left: '0',
                    onStart: function() {
                        $oSuccess.show();
                        $oUl.fadeOut();
                    }
                });
            } else {

                // 团购失败执行逻辑
                tl.to($oFail, 1, {
                    right: '0',
                    onStart: function() {
                        $oFail.show();
                        $oUl.fadeOut();
                    }
                });
            }

        });
    }

    function fnInitCity() {

        var $oPage = $('#page-01');

        // 城市选择
        $oPage.on('click', '.location', function() {
            var $oMask = $('#mask');
            if ($oMask.hasClass('hide')) {
                $oMask.removeClass('hide');
                // 禁用页面touchmove
                $('body').bind('touchmove', function(e) {
                    e.preventDefault();
                });
            }
        });

        // 城市选择确认
        $('#btnCitySure').on('click', function() {
            var $oMask = $('#mask');
            if (!$oMask.hasClass('hide')) {
                $oMask.addClass('hide');
                // 禁用页面touchmove
                $('body').unbind('touchmove');
            }
        });

        // 城市切换
        var $oCity = $('#city-group');
        var $aCitySpan = $oCity.find('span');

        $.each($aCitySpan, function(i, ele) {
            $(ele).on('click', function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        });
    }

})();
