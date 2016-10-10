
(function($) {

    $(function() {

        var $aImg = $('#listSwiper').find('img');
        var swiper = null;
        var containerWidth = 0;
        // 图片懒加载
        new LazyLoad();

        fnInitSwiper();
        fnInitCity();

        $(window).on('resize', function() {
            fnInitSwiper();
            fnInitCity();
        });

        function fnInitSwiper() {
            containerWidth = $('#listSwiper').width();
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
                speed: 500,
                autoplayDisableOnInteraction: false,
                preloadImages: false,
                lazyLoading: true
            });
        }

        function fnInitCity() {

            // 城市选择
            $('.location').on('click', function() {
                var $oMask = $('#mask');
                if ($oMask.hasClass('hide')) {
                    $oMask.removeClass('hide');
                    // 禁用页面touchmove
                    $('body').bind('touchmove', function(e) {
                        e.preventDefault();
                    });
                    fnFitCity();
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

            function fnFitCity() {
                var $oCity = $('#city-group');
                var $aCitySpan = $oCity.find('span');
                var iCityW = $oCity.width();
                var iCitySpanW = $aCitySpan.width();
                var iMargin = Math.floor((iCityW - iCitySpanW * 4 - 8) / 8);

                $.each($aCitySpan, function(i, ele) {
                    $(ele).css({
                        'margin-left': iMargin + 'px'
                    });
                });
            }
        }

    });

})(jQuery);
