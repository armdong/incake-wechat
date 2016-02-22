(function() {

    $(function() {

        // 轮播图
        fnInitSwiper();

        var $oBtnMore = $('#find-more'),
            clientH = $(window).height(),

            $oNav = $('#float-nav'),
            iNavH = $oNav.height(),

            $oActivitiesLi = $oNav.find('.li-activities'),
            $oHotLi = $oNav.find('.li-hot'),
            $oFeatureLi = $oNav.find('.li-feature'),

            $oBtnFooter = $('#float-footer'),
            iBtnFooterH = $oBtnFooter.height(),

            $oActivities = $('#activities'),
            $oHot = $('#hot'),
            $oFeature = $('#feature'),

            $oFrmRegister = $('#frm-register');

        fnFindMore();
        fnNav();

        $(window).on('scroll', function() {

            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT >= iNavH) {
                $oBtnMore.hide();
                $oNav.show();
            } else {
                $oBtnMore.show();
                $oNav.hide();
            }

            if (scrollT > ($('#container').height() - clientH - iBtnFooterH)) {
                $oBtnFooter.hide();
            } else {
                $oBtnFooter.show();
            }

        });

        $(window).on('resize',function(){
            clientH = $(window).height();
            iNavH = $oNav.height();
            iBtnFooterH = $oBtnFooter.height();
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
                fnScrollTop($oActivities);
            });
        }

        function fnNav() {
            $oActivitiesLi.on('click', function() {
                fnScrollTop($oActivities);
            });
            $oHotLi.on('click', function() {
                fnScrollTop($oHot);
            });
            $oFeatureLi.on('click', function() {
                fnScrollTop($oFeature);
            });
            $oBtnFooter.on('click', function() {
                fnScrollTop($oFrmRegister);
            });
        }

        // 滑倒指定位置
        function fnScrollTop($obj) {
            $('html,body').animate({ scrollTop: $obj.offset().top - iNavH }, 800);
        }

    });

})();
