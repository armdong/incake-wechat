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

        // 兑换券点击事件
        fnVoucher();
        $(window).on('scroll', function() {

            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT >= iNavH) {
                $oBtnMore.hide();
                $oNav.fadeIn();
            } else {
                $oBtnMore.fadeIn();
                $oNav.hide();
            }

            if (scrollT > ($('#container').height() - clientH - iBtnFooterH)) {
                $oBtnFooter.hide();
            } else {
                $oBtnFooter.fadeIn();
            }

        });

        $(window).on('resize', function() {
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

        // 处理弹框事件
        function handler4Pop(url) {
            var $oMask = $('#mask-redirect'),
                $oBtnOk = $oMask.find('.btn-redirect-ok'),
                $oBtnCancel = $oMask.find('.btn-redirect-cancel'),
                $oTxtMobile = $('#frm-register').find('.txt-mobile');

            $oMask.fadeIn();

            $oBtnOk.on('click', function() {
                $oMask.hide();
                $oTxtMobile.focus();
            });
            $oBtnCancel.on('click', function() {
                window.location.href = url;
            });
        }

        // 兑换券点击事件
        function fnVoucher(){
            var $oMaskResult = $('#mask-result'),
                $oMaskClose = $oMaskResult.find('.btn-result-close'),
                $oResultLogin = $oMaskResult.find('.result-login'),
                $oResultNew = $oMaskResult.find('.result-new'),
                $oResultOld = $oMaskResult.find('.result-old'),
                $oBtnVoucher = $('.btn-voucher'),
                $oBtnRegister = $('#btn-register');

            $oBtnVoucher.on('click', function(event) {
                event.preventDefault();
                /* Act on the event */

                // TODO 处理登录检测
				var isLogin = false;   // 用户是否登录 登录：true，未登录：false
				
				//判断用户是否登录
				if (isLogin) {
                    $oResultOld.fadeIn(function(){
                        $oMaskResult.fadeIn();
                    });
                }else{
                    $oResultLogin.fadeIn(function(){
                        $oMaskResult.fadeIn();
                    });
                }
				
            });

			$oBtnRegister.on('click', function(event) {
                event.preventDefault();
                /* Act on the event */
               
                // TODO 处理新老用户检测
                var isUserExists = false;   // 用户是否存在 存在：true，不存在：false
                
                //判断是否是老用户
                if (isUserExists) {
                	$oResultLogin.hide();
                    $oResultOld.fadeIn(function(){
                        $oMaskResult.fadeIn();
                    });
                }else{
                	$oResultLogin.hide();
                    $oResultNew.fadeIn(function(){
                        $oMaskResult.fadeIn();
                    });
                }
                
            });
			
            $oMaskClose.on('click', function(event) {
                event.preventDefault();
                /* Act on the event */
                $oMaskResult.find('.result-info').hide(function(){
                    $oMaskResult.hide();
                });
            });
        }

    });

})();
