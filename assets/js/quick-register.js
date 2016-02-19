(function() {

    $(function() {

        // 轮播图
        fnInitSwiper();

        var timer = null,
            isStop = true,
            $oBtnMore = $('#find-more'),
            clientH = $(window).height(),

            $oNav = $('#float-nav'),
            iNavH = $oNav.height(),

            $oActivitiesLi = $oNav.find('.li-activities'),
            $oHotLi = $oNav.find('.li-hot'),
            $oFeatureLi = $oNav.find('.li-feature'),

            $oActivities = $('#activities'),
            iActivitiesTop = $oActivities.offset().top,

            $oHot = $('#hot'),
            iHotTop = $oHot.offset().top,

            $oFeature = $('#feature'),
            iFeatureTop = $oFeature.offset().top;

        fnFindMore();
        fnNav();

        $(window).on('scroll', function() {

            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT >= clientH / 5) {
                $oBtnMore.hide();
            } else {
                $oBtnMore.show();
            }

            if (!isStop) {
                clearInterval(timer);
            }
            isStop = false;
        });

        function fnInitSwiper() {
            var $oSwiper = $('#activities-swiper'),
                $aImg = $oSwiper.find('img'),
                swiper = null,
                containerWidth = $oSwiper.width();

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

        function fnFindMore() {
            $oBtnMore.on('click', function() {
                fnScrollTop(iActivitiesTop - iNavH);
            });
        }

        function fnNav() {
            $oActivitiesLi.on('click', function() {
                fnScrollTop(iActivitiesTop);
            });
            $oHotLi.on('click', function() {
                fnScrollTop(iHotTop);
            });
            $oFeatureLi.on('click', function() {
                fnScrollTop(iFeatureTop);
            });
        }

        // 滑倒指定位置
        function fnScrollTop(iTop) {
            iTop = iTop - iNavH;
            timer = setInterval(function() {
                var scrollT = document.documentElement.scrollTop || document.body.scrollTop, //滚动条距离顶部的高度
                    disT = scrollT - iTop,
                    iSpeed = Math.floor(-disT / 6);

                if (iSpeed == 0 ) {
                    document.documentElement.scrollTop = document.body.scrollTop = scrollT - disT;
                } else {
                    document.documentElement.scrollTop = document.body.scrollTop = scrollT + iSpeed;
                }

                isStop = true;

                if (iSpeed == 0) {
                    clearInterval(timer);
                }

            }, 30);
        }

    });

})();
